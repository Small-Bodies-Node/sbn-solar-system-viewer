import { EOrbitalType } from '../models/EOrbitalType';
import { Orbit } from '../utils/orbit';
import { AbstractToyMesh } from './abstract-toy-mesh';

const getSphereSegments = (orbitalType: EOrbitalType) => {
  if (orbitalType === EOrbitalType.ASTEROID) return 8;
  return 32;
};

/**
 * Base class for orbiting object (planet, asteroid, etc.) with toy-scale presentation
 */
export abstract class AbstractOrbital extends AbstractToyMesh {
  // ~~~>>>

  protected _orbit: Orbit;

  constructor(
    protected readonly _name: string,
    protected _orbitalType: EOrbitalType,
    radius: number,
    toyScale: number
  ) {
    super(_name, radius, {
      toyScale,
      realScale: 1,
      sphereSegments: getSphereSegments(_orbitalType),
    });
    // Default geometry and appearance
    this._orbit = new Orbit(this._name, _orbitalType);
    this._sceneEntityGroup.name = this._name;
    this._sceneEntityGroup.add(this._orbit.getProjectedOrbitLine());
  }

  public getOrbit = () => this._orbit;

  protected _getOrbitXyz() {
    return {
      x: this._mesh.position.x,
      y: this._mesh.position.y,
      z: this._mesh.position.z,
    };
  }

  protected _updateOrbitalPosition(tCenturiesSinceJ2000: number) {
    const t = tCenturiesSinceJ2000;
    const { x, y, z } = this._orbit.getXyzMeters(t);
    this._mesh.position.set(x, y, z);
    this._wireframe.position.set(x, y, z);
  }
}
