import * as THREE from 'three';

import { AbstractSceneManager } from './abstract-scene/abstract-scene-manager';
import { buttonToggleLights } from './buttons/button-toggle-lights';
import { buttonToggleHelpers } from './buttons/button-toggle-helpers';
import { buttonToggleToyScale } from './buttons/button-toggle-toy-scale';
import { daysPerCentury } from './data/basic-planet-data';
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

    this.starField = new StarField(auToMeters(999));

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
      new Planet('PLUTO'),
    ];
    this.asteroids = [new Asteroid('65P')];

    // Register scene entities
    this.registerSceneEntities([
      new DirectionalLight(),
      new MiscHelpers(),
      new SimpleLight(),
      ...this.planets,
      ...this.asteroids,
      // this.starField,
      /** Sun MUST come last due to its sprite-blending settings **/
      // this.sun,
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
      this.setHelpersVisibility(!true);
      //
      this._camera.position.set(
        -180595912325.3482,
        34587914945.44637,
        3906449321.9052143
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
    this.sun!.setIsToyScale(this.isToyScale);
    this.planets!.forEach(_ => _.setIsToyScale(this.isToyScale));
    this.asteroids!.forEach(_ => _.setIsToyScale(this.isToyScale));
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
    }

    // Needed for TrackballControls
    if (this._controls instanceof TrackballControls) this._controls?.update();
  };
}
