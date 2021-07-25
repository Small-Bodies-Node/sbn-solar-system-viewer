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
    if (!this.SKOrbit) throw new Error('Poor logic mi amigo');
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

  getTail(radius: number, tailLength = au * 0.3, tCenturiesSinceJ200 = 0) {
    // --->>

    // Calc positions
    const realBodyPosition = this.getPosition(tCenturiesSinceJ200);
    const loggedBodyPosition = getLoggedPosition(realBodyPosition);

    // Compute times for real and logged positions to stretch out to tailLength
    let realTargetTime = tCenturiesSinceJ200;
    let loggedTargetTime = tCenturiesSinceJ200;
    let realDiffLength = 0;
    let loggedDiffLength = 0;
    let isRealSearch = true;
    let isLoggedSearch = true;
    while (isRealSearch || isLoggedSearch) {
      // --->

      isRealSearch = realDiffLength < tailLength;
      isLoggedSearch = loggedDiffLength < tailLength;
      if (isRealSearch) {
        realTargetTime += 0.5;
        realDiffLength = realBodyPosition.distanceTo(
          this.getPosition(realTargetTime)
        );
      }
      if (isLoggedSearch) {
        loggedTargetTime += 0.5;
        loggedDiffLength = loggedBodyPosition.distanceTo(
          getLoggedPosition(this.getPosition(loggedTargetTime))
        );
      }
    }

    // Set up loop to generate segments
    const radialSegments = 3;
    const heightSegments = 1;
    const numberOfSegments = 5;
    const realDt = (realTargetTime - tCenturiesSinceJ200) / numberOfSegments;
    const loggedDt =
      (loggedTargetTime - tCenturiesSinceJ200) / numberOfSegments;
    const dSegmentRadius = radius / numberOfSegments;
    const geometries: {
      realSegmentGeometry: THREE.BufferGeometry;
      loggedSegmentGeometry: THREE.BufferGeometry;
    }[] = [];
    let lastRealPosition = realBodyPosition.clone();
    let lastLoggedPosition = loggedBodyPosition.clone();
    let nextRealPosition = realBodyPosition.clone();
    let nextLoggedPosition = loggedBodyPosition.clone();
    let lastSegmentRadius = radius;
    let i = 0;

    // Generate segments
    for (let segment = 1; segment <= numberOfSegments; segment++) {
      // Extrapolate back in time to compute positions of tail
      const tReal = tCenturiesSinceJ200 + segment * realDt;
      const tLogged = tCenturiesSinceJ200 + segment * loggedDt;
      nextRealPosition = this.getPosition(tReal);
      nextLoggedPosition = getLoggedPosition(this.getPosition(tLogged));

      // Compute radius of the end of this segment
      let nextSegmentRadius = lastSegmentRadius - dSegmentRadius;

      // Compute height of segment
      const realSegmentHeight = lastRealPosition.distanceTo(nextRealPosition);
      const loggedSegmentHeight = lastLoggedPosition.distanceTo(
        nextLoggedPosition
      );

      // Create tail segments at coord origin
      const realSegmentGeometry = new THREE.CylinderGeometry(
        lastSegmentRadius,
        nextSegmentRadius,
        realSegmentHeight,
        radialSegments,
        heightSegments,
        !true
      );
      const loggedSegmentGeometry = new THREE.CylinderGeometry(
        lastSegmentRadius,
        nextSegmentRadius,
        loggedSegmentHeight,
        radialSegments,
        heightSegments,
        !true
      );

      // Position and rotate geometry
      {
        const { x, y, z } = lastRealPosition;
        const orientation = new THREE.Matrix4();
        orientation.makeTranslation(x, y, z);
        orientation.lookAt(
          lastRealPosition,
          nextRealPosition,
          new THREE.Vector3(0, 0, 1)
        );
        realSegmentGeometry.translate(0, -realSegmentHeight / 2, 0); // Rotate around end
        realSegmentGeometry.rotateX(Math.PI / 2);
        realSegmentGeometry.applyMatrix4(orientation);
      }
      {
        const { x, y, z } = lastLoggedPosition;
        const orientation = new THREE.Matrix4();
        orientation.makeTranslation(x, y, z);
        orientation.lookAt(
          lastLoggedPosition,
          nextLoggedPosition,
          new THREE.Vector3(0, 0, 1)
        );
        loggedSegmentGeometry.translate(0, -loggedSegmentHeight / 2, 0); // Rotate around end
        loggedSegmentGeometry.rotateX(Math.PI / 2);
        loggedSegmentGeometry.applyMatrix4(orientation);
      }

      // Store segments
      geometries.push({ realSegmentGeometry, loggedSegmentGeometry });

      // End loop
      lastRealPosition = nextRealPosition;
      lastLoggedPosition = nextLoggedPosition;
      lastSegmentRadius = nextSegmentRadius;
    }

    // Merge segments into single geometry
    const realGeometry = BufferGeometryUtils.mergeBufferGeometries(
      geometries.map(el => el.realSegmentGeometry),
      true
    );
    const loggedGeometry = BufferGeometryUtils.mergeBufferGeometries(
      geometries.map(el => el.loggedSegmentGeometry),
      true
    );

    return { realGeometry, loggedGeometry };
  }
}
