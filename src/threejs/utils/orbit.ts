import * as THREE from 'three';

import { EphemPresets } from '../data/ephem-presets';
import { EOrbitalType } from '../models/EOrbitalType';
import { IXYZ } from '../models/IXYZ';
import { TPlanets } from '../models/TPlanets';
import { auToMeters } from './conversions';
import { SKEphem } from './sk-ephem';
import { SKOrbit } from './sk-orbit';

export class Orbit {
  // ~~~>>>

  private SKprojectedOrbitLine!: THREE.Line;
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
    this.SKprojectedOrbitLine = this.SKOrbit.getOrbitShape();
  };

  loadAsteroid = () => {
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
      color: 'cyan',
      eclipticLineColor: undefined,
      orbitPathSettings: undefined,
    });
    this.SKprojectedOrbitLine = this.SKOrbit.getOrbitShape();
  };

  getProjectedOrbitLine = () => this.SKprojectedOrbitLine;

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
