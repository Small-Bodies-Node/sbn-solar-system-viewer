import * as THREE from 'three';

import { AbstractSceneManager } from './abstract-scene/abstract-scene-manager';
import { buttonToggleLights } from './html/button-toggle-lights';
import { buttonToggleHelpers } from './html/button-toggle-helpers';
import { buttonToggleToyScale } from './html/button-toggle-toy-scale';
import { Sun } from './scene-entities/sun';
import { Planet } from './scene-entities/planet';
import { StarField } from './scene-entities/star-field';
import { auToMeters } from './utils/conversions';
import { jsDateToCenturiesSinceJ2000 } from './utils/j2000';
import { MiscHelpers } from './scene-entities/misc-helpers';
import { SimpleLight } from './scene-entities/simple-light';
import { DirectionalLight } from './scene-entities/directional-light';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls';
import { Asteroid } from './scene-entities/asteroid';
import { ISceneManager } from './models/ISceneManager';
import { daysPerCentury } from './data/time-units';
import { PointLight } from './scene-entities/point-light';
import { planetData } from './data/basic-planet-data';

/**
 * Implement a scene for this app with 'real' scene entities
 */
export class SceneManager extends AbstractSceneManager
  implements ISceneManager {
  // ~~~>>>

  private starField?: StarField;
  private sun?: Sun;
  private planets?: Planet[];
  private asteroids?: Asteroid[];
  private isToyScale = true;
  private tCenturiesSinceJ2000 = jsDateToCenturiesSinceJ2000(new Date());

  constructor(containerId: string) {
    // --->>>

    super(containerId);

    // Create scene entities with handles
    this.sun = new Sun();

    this.planets = [
      new Planet('MERCURY'),
      new Planet('VENUS'),
      new Planet('EARTH'),
      new Planet('MARS'),
      new Planet('CERES'),
      new Planet('JUPITER'),
      new Planet('SATURN'),
      new Planet('URANUS'),
      new Planet('NEPTUNE'),
      // new Planet('PLUTO'),
      new Planet('HAUMEA'),
    ];

    this.asteroids = [new Asteroid('65P')];

    this.starField = new StarField(auToMeters(999));

    // Register scene entities
    this.registerSceneEntities([
      this.starField,
      ...this.planets,
      new DirectionalLight(),
      new MiscHelpers(),
      new SimpleLight(0.4),
      new PointLight(5, planetData.SUN.radiusMeters),
      // ...this.asteroids,
      /** Sun MUST come last due to its sprite-blending settings **/
      this.sun,
    ]);

    // Logic to run before scene initialization
    this._preInitHook = () => {
      const radius = auToMeters(4);
      // const radius = auToMeters(100); // See all planets
      this._initialViewingVector = new THREE.Vector3(0, 0, radius);
    };

    // Logic to run after scene initialization
    this._postInitHook = () => {
      // Add buttons
      buttonToggleLights(this._container!, () => {});
      buttonToggleToyScale(this._container!, this.toggleIsToyScale);
      buttonToggleHelpers(this._container!, this.toggleHelpersVisibility);
      // Misc
      this._controls!.maxDistance = auToMeters(100);
      this.setIsToyScale(true);
      // this.setHelpersVisibility(!true);
      //
      this._camera.position.set(
        // Earth
        // -180595912325.3482,
        // 34587914945.44637,
        // 3906449321.9052143
        // Haumea
        // -4514678652999.103,
        // -996799575287.2986,
        // 1431642047889.7205
        // Over Jupiter's Shoulder
        349450170005.93274,
        1508896562129.965,
        622420704159.6792
      );
    };

    // Clean up on instance destruction
    this._destroyHook = () => {};
  }

  toggleIsToyScale = () => {
    this.isToyScale = !this.isToyScale;
    this.setIsToyScale(this.isToyScale);
  };

  setIsToyScale = (isToyScale: boolean) => {
    this.isToyScale = !!isToyScale;
    this.sun!.setIsZoomToToyScale(this.isToyScale);
    this.planets!.forEach(_ => _.setIsZoomToToyScale(this.isToyScale));
    this.asteroids!.forEach(_ => _.setIsZoomToToyScale(this.isToyScale));
  };

  _updateCamera = (_time: number) => {
    const deltaDaysPerSec = 5000;
    const dt_real = this._clock.getDelta();
    const dt = (1 / daysPerCentury) * deltaDaysPerSec * dt_real;
    this.tCenturiesSinceJ2000 += dt;

    this._sceneEntities.forEach(el => el.update(this.tCenturiesSinceJ2000));

    // Debug
    // if (this._clock.elapsedTime < 5) console.log(this._scene);
    if (Math.random() < 0.1 && this._clock.elapsedTime < 50) {
      // console.log(this._camera.position);
      // console.log('>>> ', this._sceneEntities);
    }

    // Needed for TrackballControls
    if (this._controls instanceof TrackballControls) this._controls?.update();
  };
}
