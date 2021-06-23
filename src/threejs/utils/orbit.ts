import * as THREE from 'three';

import { EphemPresets } from '../data/ephem-presets';
import { EOrbitalType } from '../models/EOrbitalType';
import { IXYZ } from '../models/IXYZ';
import { TPlanets } from '../models/TPlanets';
import { auToMeters } from './conversions';
import { SKEphem } from './sk-ephem';
import { SKOrbit } from './sk-orbit';
import { BufferGeometryUtils } from 'three/examples/jsm/utils/BufferGeometryUtils';
import { getLoggedPosition } from './get-logged-position';

const au = auToMeters(1);

export class Orbit {
  // ~~~>>>

  private SKprojectedOrbitLine!: THREE.Line<
    THREE.BufferGeometry,
    THREE.LineBasicMaterial
  >;
  // private orbitLine!: THREE.Line<THREE.BufferGeometry, THREE.LineBasicMaterial>;
  private orbitLine!: THREE.Line<THREE.BufferGeometry, THREE.LineBasicMaterial>;
  private SKEph?: SKEphem;
  private SKOrbit?: SKOrbit;

  constructor(
    //
    private name: string,
    private orbitalType = EOrbitalType.PLANET,
    private skephem?: SKEphem,
    private color: string = 'white',
    private opacity: number = 0.7
  ) {
    // --->>>

    switch (this.orbitalType) {
      case EOrbitalType.ASTEROID: {
        this.loadAsteroid();
        break;
      }
      case EOrbitalType.PLANET: {
        this.loadPlanet();
        break;
      }
      case EOrbitalType.DWARF_PLANET: {
        this.loadPlanet();
        break;
      }
      default: {
        this.loadPlanet();
        break;
      }
    }
  }

  loadPlanet = () => {
    this.SKEph = EphemPresets[this.name as TPlanets];
    this.SKOrbit = new SKOrbit(this.SKEph, {
      color: this.orbitalType === EOrbitalType.PLANET ? 'white' : 'pink',
      eclipticLineColor: undefined,
      orbitPathSettings: undefined,
    });
    // this.SKprojectedOrbitLine = this.SKOrbit.getOrbitShape();
    this.SKprojectedOrbitLine = this.getMorphedOrbitLine();
    this.SKprojectedOrbitLine.material.transparent = true;
    this.SKprojectedOrbitLine.material.opacity = this.opacity || 1;
    this.SKprojectedOrbitLine.material.needsUpdate = true;
  };

  loadAsteroid = () => {
    this.SKEph =
      this.skephem ||
      new SKEphem(
        {
          epoch: 2458600.5,
          a: 5.38533,
          e: 0.19893,
          i: 22.11137,
          om: 294.42992,
          w: 314.2889,
          ma: 229.14238,
        },
        'deg'
      );
    this.SKOrbit = new SKOrbit(this.SKEph, {
      color: 'cyan',
      eclipticLineColor: undefined,
      orbitPathSettings: undefined,
    });
    // this.SKprojectedOrbitLine = this.SKOrbit.getOrbitShape();
    this.SKprojectedOrbitLine = this.getMorphedOrbitLine();
    this.SKprojectedOrbitLine.material.color = new THREE.Color('cyan');
    this.SKprojectedOrbitLine.material.transparent = true;
    this.SKprojectedOrbitLine.material.opacity = this.opacity || 1;
    this.SKprojectedOrbitLine.material.needsUpdate = true;
  };

  getMorphedOrbitLine() {
    if (!!this.orbitLine) return this.orbitLine;
    if (!this.SKOrbit) throw new Error('Hmmmm');
    const geometry = this.SKOrbit.getEllipseGeometry();
    geometry.morphAttributes.position = [];
    const positionAttribute = geometry.attributes.position;
    const loggedPositions = [];
    for (let i = 0; i < positionAttribute.count; i++) {
      const x0 = positionAttribute.getX(i);
      const y0 = positionAttribute.getY(i);
      const z0 = positionAttribute.getZ(i);

      const position = new THREE.Vector3(x0, y0, z0);
      const logpos = getLoggedPosition(position);
      const { x, y, z } = logpos;
      loggedPositions.push(x, y, z);
    }
    geometry.morphAttributes.position[0] = new THREE.Float32BufferAttribute(
      loggedPositions,
      3
    );
    // this.orbitLine = new THREE.Line(
    this.orbitLine = new THREE.Line(
      geometry,
      new THREE.LineBasicMaterial({
        color: new THREE.Color(this.color || 0x444444),
        morphTargets: true,
      })
    );
    return this.orbitLine;
  }

  getProjectedOrbitLine = () => this.SKprojectedOrbitLine;

  xxx() {}

  getXyzMeters(tCenturiesSinceJ200 = 0): IXYZ {
    // --->>>

    const xyz = this.SKOrbit?.getPositionAtTime(tCenturiesSinceJ200);
    if (!xyz) return { x: 0, y: 0, z: 0 };
    const x = auToMeters(xyz[0]);
    const y = auToMeters(xyz[1]);
    const z = auToMeters(xyz[2]);
    return { x, y, z };
  }

  getPosition(tCenturiesSinceJ200 = 0) {
    const { x, y, z } = this.getXyzMeters(tCenturiesSinceJ200);
    return new THREE.Vector3(x, y, z);
  }

  getTail(radius: number, tailLength = au * 0.2, tCenturiesSinceJ200 = 0) {
    // --->>

    let lastR = radius;
    const geometries = [];
    let t = tCenturiesSinceJ200;
    const dt = 1.1;
    const bodyPosition = this.getPosition(tCenturiesSinceJ200);
    let lastPosition = bodyPosition.clone();
    let nextPosition = bodyPosition.clone();
    let diffLength = 0;
    let i = 0;
    while (diffLength < tailLength) {
      //

      let nextR = (1 - diffLength / tailLength) * radius;
      if (nextR > radius) nextR = radius;
      if (nextR < 0) nextR = 0;

      // Extrapolate back in time to compute positions of tail
      nextPosition = this.getPosition((t -= dt));
      diffLength = lastPosition.distanceTo(bodyPosition);
      const height = lastPosition.distanceTo(nextPosition);

      const radialSegments = 3;
      const heightSegments = 1;
      const geometry = new THREE.CylinderGeometry(
        lastR,
        nextR,
        height,
        radialSegments,
        heightSegments,
        !true
      );
      const { x, y, z } = lastPosition;
      const orientation = new THREE.Matrix4();
      orientation.makeTranslation(x, y, z);
      orientation.lookAt(
        lastPosition,
        nextPosition,
        new THREE.Vector3(0, 0, 1)
      );

      geometry.rotateX(Math.PI / 2);
      geometry.applyMatrix4(orientation);
      geometries.push(geometry);

      // End loop
      i++;
      lastPosition = nextPosition;
      lastR = nextR;
    }
    const mergedGeometries = BufferGeometryUtils.mergeBufferGeometries(
      geometries,
      true
    );
    return { geometry: mergedGeometries, position: bodyPosition };
  }
}
