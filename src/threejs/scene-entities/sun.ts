import * as THREE from 'three';

import { getTextureFromImageUrl } from '../utils/get-texture-from-image-url';
import { solarSystemData } from '../data/basic-solar-system-data';
import { ISceneEntity } from '../models/ISceneEntity';
import { AbstractToyModel } from '../abstract-scene/abstract-toy-model';
import { imageBaseUrl } from '../utils/constants';
import { getInitDate } from '../..';
import { IZoomable } from '../models/IZoomable';

/**
 * When a sprite is loaded it is given a size of '1'
 * So it needs to be scaled, in this case, to the size of the Sun
 * Further, the Sun only takes up a fraction of this image, so we need this factor
 * to scale the image further
 */
const realToToyRatio = 30;
const imageToSunRatio = 20;

export class Sun extends AbstractToyModel implements IZoomable {
  // ~~~>>>

  public readonly NAME = 'SUN';
  private readonly position = new THREE.Vector3(0, 0, 0);
  private readonly sunRadiusMeters = solarSystemData.SUN.radiusMeters;
  private model = new THREE.Group();
  private helper: THREE.LineSegments;
  private sprite = new THREE.Sprite(
    new THREE.SpriteMaterial({
      blending: THREE.AdditiveBlending,
      transparent: true,
      visible: false,
    })
  );

  constructor() {
    super(realToToyRatio);

    // Set up sun sprite size
    this.sprite.scale.multiplyScalar(this.sunRadiusMeters * imageToSunRatio);
    this.model.add(this.sprite);

    // Set up helper
    this.helper = new THREE.LineSegments(
      new THREE.EdgesGeometry(
        new THREE.SphereGeometry(this.sunRadiusMeters, 32)
      ),
      new THREE.LineBasicMaterial({ color: new THREE.Color('cyan') })
    );
    this.helper.userData.isHelper = true;
    this.helper.rotateX(Math.PI / 2);
    this.model.add(this.helper);
  }

  getRadius = () => this.sunRadiusMeters;

  getPosition = () => this.position;

  async init() {
    return new Promise<THREE.Group>(async resolve => {
      // --->>>

      const spriteUrl = `${imageBaseUrl}/stars/sun3-sprite-512.png`;
      const onTextureLoad = (texture: THREE.Texture | null) => {
        this.sprite.material.map = texture;
        this.sprite.material.needsUpdate = true;
        this.sprite.material.visible = true;
      };

      if (this._isAsyncLoad()) {
        getTextureFromImageUrl(spriteUrl, 'SUN SPRITE IMAGE')
          .then(onTextureLoad)
          .catch(_ => null);
      } else {
        onTextureLoad(await getTextureFromImageUrl(spriteUrl).catch(_ => null));
      }

      this._toyModel = this.model;
      this._sceneEntityGroup.name = this.NAME;
      this._sceneEntityGroup.add(this.model);
      console.log('Sun resolved', +new Date() - +getInitDate());
      resolve(this._sceneEntityGroup);
    });
  }

  update() {
    this._updateModelScale();
  }
}
