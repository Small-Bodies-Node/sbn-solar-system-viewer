import * as THREE from 'three';

import { AbstractToyModel } from '../abstract-scene/abstract-toy-model';
import { getTextureFromImageUrl } from '../utils/get-texture-from-image-url';
import { assetsBaseUrl, au } from '../utils/constants';
import { ISceneEntity } from '../models/ISceneEntity';
import {
  TAsteroidBeltType,
  asteroidBeltTypes,
} from '../models/TAsteroidBeltType';
import { getAsteroidBeltColor } from '../utils/get-asteroid-belt-color';
import { getAsteroidBeltMergedGeometries } from '../utils/get-asteroid-belt-merged-geometries';
import { myprint } from '../utils/myprint';
import { SceneManager } from '../scene-manager';

type TLabelsDict = { [key in TAsteroidBeltType]: string };
/* const labelsDict: TLabelsDict = {
  DISTANTOBJECT: 'Distant Objects',
  MBA: 'Main Asteroid Belt',
  NEO1KM: 'Near Earth Orbit >1Km',
  PHA: 'Potentially Hazardous Objects',
  NOT_NEO1KM: 'NOT Near Earth Orbit >1Km',
}; */

type TMeshes = {
  [key in TAsteroidBeltType]: THREE.Mesh<
    THREE.BufferGeometry,
    THREE.MeshPhongMaterial
  >;
};

const getInitMeshes = () =>
  asteroidBeltTypes.reduce((acc: any, belt, ind) => {
    acc[belt] = new THREE.Mesh(
      new THREE.BufferGeometry(),
      new THREE.MeshPhongMaterial({ morphTargets: true })
    );
    return acc;
  }, {}) as any;

export class AsteroidBelt extends AbstractToyModel implements ISceneEntity {
  // --->>>

  public readonly NAME: string;
  private isMeshesLoaded = false;
  private isBeltVisible = true;

  mergedAsteroidsMeshes: TMeshes = getInitMeshes();
  mergedTailsMeshes: TMeshes = getInitMeshes();

  constructor(
    private belts: TAsteroidBeltType[],
    private parentSceneManager: SceneManager
  ) {
    super(3000);
    this.NAME = 'BELTS';
    this.belts.forEach(belt => {
      this._sceneEntityGroup.add(this.mergedAsteroidsMeshes[belt]);
      this._sceneEntityGroup.add(this.mergedTailsMeshes[belt]);
    });
    this.parentSceneManager.updateMessageField('Building asteroid belt');
  }

  async init() {
    return new Promise<THREE.Group>(async resolve => {
      // --->>

      const textureUrl = `${assetsBaseUrl}/misc/rock-texture-512.png`;

      const texture = await getTextureFromImageUrl(textureUrl).catch(_ => null);

      getAsteroidBeltMergedGeometries(this.belts, this.parentSceneManager)
        /*         .then(asteroidBeltMergedGeometries => ({
          asteroidBeltMergedGeometries,

        })) */
        .then(xxx => {
          // ]).then(([texture, { mergedAsteroidGeometry, mergedTailsGeometry }[]]) => {
          // --->>

          // const { belt, asteroidBeltMergedGeometries } = xxx;
          xxx.forEach(
            ({ belt, mergedAsteroidGeometry, mergedTailsGeometry }) => {
              //

              const color = getAsteroidBeltColor(belt);

              // Update asteroids mesh with computed geometry, etc.
              this.mergedAsteroidsMeshes[
                belt
              ].geometry = mergedAsteroidGeometry;
              this.mergedAsteroidsMeshes[
                belt
              ].material = new THREE.MeshPhongMaterial({
                color: new THREE.Color(color),
                map: texture,
                shininess: 0,
                transparent: true,
                morphTargets: true,
              });
              this.mergedAsteroidsMeshes[belt].material.needsUpdate = true;
              this.mergedAsteroidsMeshes[belt].morphTargetInfluences = [0];

              // Update tails mesh with computed geometry, etc.
              this.mergedTailsMeshes[belt].geometry = mergedTailsGeometry;
              this.mergedTailsMeshes[
                belt
              ].material = new THREE.MeshPhongMaterial({
                color: new THREE.Color(color),
                transparent: true,
                morphTargets: true,
              });
              this.mergedTailsMeshes[belt].material.needsUpdate = true;
              this.mergedTailsMeshes[belt].morphTargetInfluences = [0];

              myprint(this.NAME + ' LOADED');
              this.isMeshesLoaded = true;
            }
          );
        });

      myprint('RESOLVED ' + this.NAME);
      resolve(this._sceneEntityGroup);
    });
  }

  public getPosition = () => new THREE.Vector3();

  public getRadius = () => 1;

  updateMeshes() {
    // Interpolate between log and real scale
    const u = this.getLogInterpolationParam();
    this.belts.forEach(belt => {
      this.mergedAsteroidsMeshes[belt].morphTargetInfluences![0] = u;
      this.mergedTailsMeshes[belt].morphTargetInfluences![0] = u;
    });
  }

  setIsBeltVisible(val: boolean) {
    this.isBeltVisible = val;
    this.belts.forEach(belt => {
      this.mergedAsteroidsMeshes[belt].visible = this.isBeltVisible;
      this.mergedTailsMeshes[belt].visible = this.isBeltVisible;
    });
  }

  toggleIsBeltVisible() {
    this.setIsBeltVisible(!this.isBeltVisible);
  }

  update(_camera?: THREE.Camera) {
    // --->>

    this._updateModelScale();

    if (this.isMeshesLoaded) this.updateMeshes();

    if (!_camera) return;

    // Update mesh opacity based on distance from camera
    const dist = _camera.position.distanceTo(new THREE.Vector3());
    const cutoff = 4 * au;
    let opacity = 0;
    opacity = (dist - cutoff) / (0.5 * au);
    if (opacity < 0) opacity = 0;
    if (opacity > 1) opacity = 1;
    this.belts.forEach(belt => {
      if (!this.isBeltVisible) return;
      this.mergedTailsMeshes[belt].material.opacity = opacity;
      this.mergedTailsMeshes[belt].visible = opacity !== 0;
      if (!true) {
        this.mergedTailsMeshes[belt].visible = true;
        this.mergedTailsMeshes[belt].material.opacity = 1;
      }
      this.mergedTailsMeshes[belt].material.needsUpdate = true;
    });
  }
}
