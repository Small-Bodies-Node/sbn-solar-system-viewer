import * as THREE from 'three';
import { BufferGeometryUtils } from 'three/examples/jsm/utils/BufferGeometryUtils';

import { Orbit } from '../utils/orbit';
import { AbstractToyModel } from '../abstract-scene/abstract-toy-model';
import { createAsteroidGeometry } from '../utils/create-asteroid-geometry';
import { getTextureFromImageUrl } from '../utils/get-texture-from-image-url';
import { imageBaseUrl, au } from '../utils/constants';
import { getPlanetRadiusMeters } from '../utils/get-planet-radius-meters';
import { IAsteroidDatum } from '../models/IAsteroidDatum';
import { ISceneEntity } from '../models/ISceneEntity';
import { getInitDate } from '../..';
import { addLogMorphsToGeometry } from '../utils/add-log-morphs-to-geometry';
import { TAsteroidBeltType } from '../models/TAsteroidBeltType';
import { getAsteroidBeltColor } from '../utils/get-asteroid-belt-color';
import { getOrbitFromAsteroidDatum } from '../utils/get-orbit-from-asteroid-datum';

// Lots of Data
import mba_data from '../data/json/asteroids/asteroids-MBA-h-11.json';
import neo1km_data from '../data/json/asteroids/asteroids-1kmNEO-h-20.json';
import pha_data from '../data/json/asteroids/asteroids-PHA-h-999.json';
import do_data from '../data/json/asteroids/asteroids-distantObject-h-7.json';

// Absolute Minimum data
// import mba_data from '../data/json/asteroids/asteroids-MBA-h-4.json';
// import neo1km_data from '../data/json/asteroids/asteroids-1kmNEO-h-10.json';
// import pha_data from '../data/json/asteroids/asteroids-PHA-h-15.json';
// import do_data from '../data/json/asteroids/asteroids-distantObject-h-5.json';

// Same number each
// import mba_data from '../data/json/asteroids/asteroids-MBA-h-10.json';
// import neo1km_data from '../data/json/asteroids/asteroids-1kmNEO-h-18.json';
// import pha_data from '../data/json/asteroids/asteroids-PHA-h-20.json';
// import do_data from '../data/json/asteroids/asteroids-distantObject-h-7.json';

type TData = { [K in TAsteroidBeltType]: IAsteroidDatum[] };

const asteroidData: TData = {
  MBA: mba_data,
  NEO1KM: neo1km_data,
  PHA: pha_data,
  DISTANTOBJECT: do_data,
};

Object.keys(asteroidData).forEach(key =>
  console.log('>>>>', key, asteroidData[key as TAsteroidBeltType].length)
);

export class AsteroidBelt extends AbstractToyModel implements ISceneEntity {
  // --->>>

  private orbits: Orbit[] = [];
  private radius = getPlanetRadiusMeters('CERES') / 2;
  private geometries: {
    geometry: THREE.BufferGeometry;
    position: THREE.Vector3;
  }[] = [];
  private tailGeometries: {
    geometry: THREE.BufferGeometry;
    position: THREE.Vector3;
  }[] = [];
  private mergedMesh!: THREE.Mesh<
    THREE.BufferGeometry,
    THREE.MeshPhongMaterial
  >;
  private mergedTailsMesh!: THREE.Mesh<
    THREE.BufferGeometry,
    THREE.MeshPhongMaterial
  >;

  constructor(public readonly NAME: string, private belt: TAsteroidBeltType) {
    super(3000);
  }

  async init() {
    return new Promise<THREE.Group>(async resolve => {
      // --->>

      // const url = `${imageBaseUrl}/misc/asteroid-texture-1024.jpg`;
      const url = `${imageBaseUrl}/misc/rock-texture-512.png`;
      const texture = await getTextureFromImageUrl(url).catch(_ => null);
      const color = getAsteroidBeltColor(this.belt);

      const data = asteroidData[this.belt] as IAsteroidDatum[];
      data.forEach(datum => {
        // --->>

        // Filter on H
        const { H } = datum;
        // if (H <= 0) return;

        // Compute radius for this object
        const r = ((this.radius * 15) / (H + 1)) * (0.1 + 5 * Math.random());
        if (!r || r <= 0) console.log('!!!!!!!!!!', datum.name);

        // Create orbit
        const orbit = getOrbitFromAsteroidDatum(datum, 'red', 0.01);
        this.orbits.push(orbit);
        const position = orbit.getPosition();
        const { x, y, z } = position;

        // Reject failed orbits
        if (!x || !y || !z) {
          // console.log('>>>>', datum.name, x, y, z);
          return;
        }

        // Get tail for asteroid
        // const tailGeometry = orbit.getTail(r * 50000);
        const tailGeometry = orbit.getTail(r * 5000);
        this.tailGeometries.push(tailGeometry);

        // Create geometry
        const geometry = createAsteroidGeometry(
          r,
          0.25 * (1.5 - Math.random())
        );
        geometry.name = datum.name || 'unknown';
        this.geometries.push({ geometry, position });
      });

      // Merge meshes
      this.mergedMesh = new THREE.Mesh(
        this.getMergedGeometries(),
        new THREE.MeshPhongMaterial({
          color: new THREE.Color(color),
          map: texture,
          shininess: 0,
          transparent: true,
          morphTargets: true,
        })
      );
      this.mergedTailsMesh = new THREE.Mesh(
        this.getMergedTailGeometries(),
        new THREE.MeshPhongMaterial({
          color: new THREE.Color(color),
          shininess: 0,
          transparent: true,
          opacity: 1,
          depthTest: false,
          morphTargets: true,
        })
      );

      // Finish
      this._sceneEntityGroup.add(this.mergedMesh);
      this._sceneEntityGroup.add(this.mergedTailsMesh);

      console.log('---->>>', this.tailGeometries.length);
      console.log(this.NAME, ' RESOLVED', +new Date() - +getInitDate());
      resolve(this._sceneEntityGroup);
    });
  }

  getMergedGeometries() {
    const mergedGeometry = BufferGeometryUtils.mergeBufferGeometries(
      this.geometries.map(el => {
        const { geometry, position } = el;
        const { x, y, z } = position;
        const newGeometry = geometry.clone();
        const s = 1000;
        newGeometry.scale(s, s, s);
        newGeometry.translate(x, y, z);
        newGeometry.name = 'Merged mesh geometry';
        return newGeometry;
      }),
      true
    );
    addLogMorphsToGeometry(mergedGeometry);
    // getGeometryByteLength(mergedGeometry);
    return mergedGeometry;
  }

  getMergedTailGeometries() {
    const mergedGeometry = BufferGeometryUtils.mergeBufferGeometries(
      this.tailGeometries.map(el => {
        const { geometry } = el;
        const newGeometry = geometry.clone();
        newGeometry.name = 'Merged tails geometry';
        return newGeometry;
      }),
      true
    );
    addLogMorphsToGeometry(mergedGeometry);
    return mergedGeometry;
  }

  public getPosition = () => new THREE.Vector3();

  public getRadius = () => this.radius;

  updateMeshes() {
    // Interpolate between log and normal scale
    const u = this.getLogInterpolationParam();
    this.mergedMesh.morphTargetInfluences![0] = u;
    this.mergedTailsMesh.morphTargetInfluences![0] = u;
  }

  update(_camera?: THREE.Camera) {
    // --->>

    this._updateModelScale();

    this.updateMeshes();

    if (!_camera) return;

    // Update mesh opacity based on distance from camera
    const dist = _camera.position.distanceTo(new THREE.Vector3());
    const cutoff = 4 * au;
    let opacity = 0;
    opacity = (dist - cutoff) / (1 * au);
    if (opacity < 0) opacity = 0;
    if (opacity > 1) opacity = 1;
    this.mergedTailsMesh.material.opacity = opacity;
    this.mergedTailsMesh.visible = opacity !== 0;
    // this.mergedTailsMesh.material.opacity = 1;
    this.mergedTailsMesh.material.needsUpdate = true;
  }
}
