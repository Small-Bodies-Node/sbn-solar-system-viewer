import * as THREE from 'three';

import { createEarthCloudMesh } from '../utils/create-earth-cloud-mesh';
import { getTextureFromImageUrl } from '../utils/get-texture-from-image-url';
import { getPlanetRadiusMeters } from '../utils/get-planet-radius-meters';
import { EOrbitalType } from '../models/EOrbitalType';
import { gltfLoader } from '../utils/gltf-loader';
import { TPlanets } from '../models/TPlanets';
import { imageBaseUrl } from '../utils/constants';
import { getInitDate } from '../..';
import { AbstractToyModel } from '../abstract-scene/abstract-toy-model';
import { Orbit } from '../utils/orbit';
import { IZoomableOrbital } from '../models/IZoomableOrbital';

const planetsWithBumpMaps: Partial<TPlanets>[] = [
  'MERCURY',
  'VENUS',
  'EARTH',
  'MARS',
  'CERES',
  'PLUTO',
];

const planetsAsLoadableObjects: Partial<TPlanets>[] = [
  //
  'HAUMEA',
  'MAKEMAKE',
  'ERIS',
];

const dwarfPlanets: Partial<TPlanets>[] = [
  'CERES',
  'PLUTO',
  'HAUMEA',
  'MAKEMAKE',
  'ERIS',
];

const getPlanetType = (name: TPlanets) => {
  return dwarfPlanets.includes(name)
    ? EOrbitalType.DWARF_PLANET
    : EOrbitalType.PLANET;
};

/**
 * "Cloud Radius Factor": ratio of cloud radius to planet radius
 */
const crf = 1.05;

/**
 * "Helper Radius Factor": ratio of helper radius to clouded-planet radius
 */
const hrf = 1.2;

/**
 * Get the toy scale for different planets
 */
const getPlanetToyScale = (name: TPlanets) => {
  if (name === 'PLUTO') return 10000;
  if (name === 'CERES') return 10000;
  if (name === 'HAUMEA') return 15000;
  if (name === 'MAKEMAKE') return 15000;
  if (name === 'ERIS') return 15000;
  return 3000;
};

export class Planet extends AbstractToyModel implements IZoomableOrbital {
  // ~~~>>>

  private helper: THREE.LineSegments;
  private model = new THREE.Group();
  private clouds?: THREE.Mesh;
  private orbit: Orbit;
  private SKprojectedOrbitLine: THREE.Line<
    THREE.BufferGeometry,
    THREE.LineBasicMaterial
  >;
  private radius: number;

  constructor(public readonly NAME: TPlanets) {
    // --->>>

    super(getPlanetToyScale(NAME));

    this.radius = getPlanetRadiusMeters(NAME);
    this.orbit = new Orbit(this.NAME, getPlanetType(NAME));
    this.SKprojectedOrbitLine = this.orbit.getProjectedOrbitLine();
    this._sceneEntityGroup.add(this.SKprojectedOrbitLine);

    // Make the model toy-scalable
    this._toyModel = this.model;

    // Set up helper
    this.helper = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.SphereGeometry(this.radius * hrf, 32)),
      new THREE.LineBasicMaterial({ color: new THREE.Color('cyan') })
    );
    this.helper.userData.isHelper = true;
    this.helper.rotateX(Math.PI / 2);
    this.model.add(this.helper);
  }

  async init() {
    return new Promise<THREE.Group>(async resolve => {
      // --->>>

      // Choose between planet as sphere or loadable object
      if (planetsAsLoadableObjects.includes(this.NAME)) {
        await this.loadPlanetAsObject();
      } else {
        await this.loadPlanetAsTexturedSphere();
      }

      console.log(this.NAME, ' RESOLVED', +new Date() - +getInitDate());
      this._sceneEntityGroup.add(this.model);
      resolve(this._sceneEntityGroup);
    });
  }

  loadPlanetAsObject = async () => {
    const name = this.NAME.toLowerCase();
    const objUrl = `${imageBaseUrl}/planets/${name}/${name}.glb`;

    // Add temporary sphere till object is loaded
    const tempMesh = new THREE.Mesh(
      new THREE.SphereGeometry(this.radius, 32, 32),
      new THREE.MeshPhongMaterial()
    );
    tempMesh.rotateX(Math.PI / 2);
    this.model.add(tempMesh);

    const onObjectLoad = (obj: THREE.Group | null) => {
      tempMesh.visible = false;
      if (!!obj) this.model.add(obj);
    };

    if (this._isAsyncLoad()) {
      gltfLoader(objUrl, this.radius)
        .then(onObjectLoad)
        .catch(_ => onObjectLoad(null));
    } else {
      onObjectLoad(await gltfLoader(objUrl, this.radius).catch(_ => null));
    }
  };

  loadPlanetAsTexturedSphere = async () => {
    const name = this.NAME.toLowerCase();
    const imageUrl = `${imageBaseUrl}/planets/${name}/${name}-map-1024.jpg`;
    const bumpUrl = `${imageBaseUrl}/planets/${name}/${name}-bump-1024.png`;
    const isBumpy = planetsWithBumpMaps.includes(this.NAME);
    const isEarth = this.NAME === 'EARTH';
    const pNull = Promise.resolve(null);
    const mesh = new THREE.Mesh(
      new THREE.SphereGeometry(this.radius, 32, 32),
      new THREE.MeshPhongMaterial({ shininess: isEarth ? 25 : 2 })
    );
    mesh.rotateX(Math.PI / 2);
    this.model.add(mesh);

    const onTexturesLoad = ([
      promisedMapTexture,
      promisedBumpTexture,
      promisedEarthCloudTexture,
    ]: PromiseSettledResult<THREE.Texture | null>[]) => {
      // Unpack PromiseSettledResults:
      const map =
        promisedMapTexture.status === 'fulfilled'
          ? promisedMapTexture.value
          : null;
      const bumpMap =
        promisedBumpTexture.status === 'fulfilled'
          ? promisedBumpTexture.value
          : null;
      const earthClouds =
        promisedEarthCloudTexture.status === 'fulfilled'
          ? promisedEarthCloudTexture.value
          : null;

      mesh.material.map = map;
      mesh.material.bumpMap = bumpMap;
      mesh.material.bumpScale = this.radius * 50;
      mesh.material.needsUpdate = true;

      if (earthClouds) {
        this.clouds = new THREE.Mesh<THREE.SphereGeometry>(
          new THREE.SphereGeometry(this.radius * crf, 32, 32),
          new THREE.MeshPhongMaterial({
            map: earthClouds,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.6,
          })
        );
        this.model.add(this.clouds);
      }
    };

    // Create promises
    const promises = [
      getTextureFromImageUrl(imageUrl, name).catch(_ => null),
      isBumpy ? getTextureFromImageUrl(bumpUrl, name).catch(_ => null) : pNull,
      isEarth ? createEarthCloudMesh().catch(_ => null) : pNull,
    ];

    // Wait for promises or load async
    if (this._isAsyncLoad()) {
      Promise.allSettled(promises).then(onTexturesLoad);
    } else {
      onTexturesLoad(await Promise.allSettled(promises));
    }
  };

  public getPosition = () => {
    // const { x, y, z } = this.orbit.getXyzMeters();
    // return new THREE.Vector3(x, y, z);
    return this.model.position;
  };

  public getRadius = () => this.radius;

  public getOrbit = () => this.orbit;

  public setIsOrbitVisible = (val: boolean) => {
    this.SKprojectedOrbitLine.visible = val;
  };

  update() {
    // Update planet position
    const { x, y, z } = this.orbit.getXyzMeters();
    this.model.position.set(x, y, z);

    // Toy Model Scale
    this._updateModelScale();

    // Spin planet
    this.model.rotateZ(0.0015);
    if (!!this.clouds) {
      // Spin clouds relative to planet
      this.clouds.rotateY(-0.0001);
      this.clouds.rotateZ(-0.0004);
    }
  }
}
