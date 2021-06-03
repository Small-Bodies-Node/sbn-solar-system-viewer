import * as THREE from 'three';

import { orbitalParams } from '../data/basic-planet-data';
import { EphemPresets } from '../data/ephem-presets';
import { EOrbitalType } from '../models/EOrbitalType';
import { IXYZ } from '../models/IXYZ';
import { auToMeters } from './conversions';
import { getPlanetPosition, TPlanets } from './getPlanetPosition';
import { SKEphem } from './SKEphem';
import { SKOrbit } from './SKOrbit';

export class Orbit {
  // ~~~>>>

  private cachedPositions: IXYZ[] = [];
  private projectedOrbitPoints: THREE.Vector3[] = [];
  private projectedOrbitMaterial = new THREE.LineBasicMaterial({
    linewidth: 2,
    color: 'white',
  });
  private projectedOrbitLine = new THREE.Line(
    new THREE.BufferGeometry(),
    this.projectedOrbitMaterial
  );
  private SKprojectedOrbitLine!: THREE.Line;

  // SK
  private SKEph?: SKEphem;
  private SKOrbit?: SKOrbit;

  constructor(private name: string, private orbitalType = EOrbitalType.PLANET) {
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
      default: {
        this.loadPlanet();
        break;
      }
    }

    //
    // @ts-ignore
    // console.log('>>>>', this.projectedOrbitLine, this.SKprojectedOrbitLine);
    //
  }

  loadPlanet = () => {
    this.projectedOrbitMaterial.color = new THREE.Color('white');
    this.SKEph = EphemPresets[this.name as TPlanets];
    this.SKOrbit = new SKOrbit(this.SKEph, {
      color: 'white',
      eclipticLineColor: undefined,
      orbitPathSettings: undefined,
    });
    this.SKprojectedOrbitLine = this.SKOrbit.getOrbitShape();
  };

  loadAsteroid = () => {
    this.projectedOrbitMaterial.color = new THREE.Color('cyan');
    this.SKEph = new SKEphem(
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
      color: undefined,
      eclipticLineColor: undefined,
      orbitPathSettings: undefined,
    });
    this.SKprojectedOrbitLine = this.SKOrbit.getOrbitShape();
  };

  calcRevolutionPath(tCenturiesSinceJ200: number = 0) {
    // --->>>

    // Calc path increments in units of centuries
    const dayInCenturies = 1 / (100 * 365.25);
    const dt = dayInCenturies * 1;

    this.projectedOrbitPoints = [];

    const orbitalPeriod = orbitalParams[this.name as TPlanets].periodDays || 0;

    for (let i = 0; i < orbitalPeriod * 1.01; i++) {
      const { x, y, z } = this.getXyzMeters(tCenturiesSinceJ200 + dt * i);
      this.projectedOrbitPoints.push(new THREE.Vector3(x, y, z));
    }

    // Convert array of points to THREE.Line:
    this.projectedOrbitLine.geometry = new THREE.BufferGeometry().setFromPoints(
      this.projectedOrbitPoints
    );
  }

  getProjectedOrbitLine = () => this.SKprojectedOrbitLine;
  // getProjectedOrbitLine = () => this.projectedOrbitLine;

  getPlanetXyzMeters(tCenturiesSinceJ200: number = 0): IXYZ {
    // --->>>

    if (!!this.cachedPositions[tCenturiesSinceJ200])
      return this.cachedPositions[tCenturiesSinceJ200];

    const planetPosition = getPlanetPosition(
      this.name as TPlanets,
      tCenturiesSinceJ200
    );
    this.cachedPositions[tCenturiesSinceJ200] = planetPosition;
    return planetPosition;
  }

  getXyzMeters(tCenturiesSinceJ200: number = 0): IXYZ {
    // --->>>

    const xyz = this.SKOrbit?.getPositionAtTime(tCenturiesSinceJ200);
    if (!xyz) return { x: 0, y: 0, z: 0 };
    const x = auToMeters(xyz[0]);
    const y = auToMeters(xyz[1]);
    const z = auToMeters(xyz[2]);
    return { x, y, z };
  }
}
