import * as THREE from 'three';

import { AbstractSceneManager } from './abstract-scene/abstract-scene-manager';
import { Sun } from './scene-entities/sun';
import { Planet } from './scene-entities/planet';
import { StarField } from './scene-entities/star-field';
import { auToMeters } from './utils/conversions';
import { MiscHelpers } from './scene-entities/misc-helpers';
import { SimpleLight } from './scene-entities/simple-light';
import { Asteroid } from './scene-entities/asteroid';
import { PointLight } from './scene-entities/point-light';
import { solarSystemData } from './data/basic-solar-system-data';
import { createSearchField } from './html/create-search-field';
import { IZoomable } from './models/IZoomable';
import { updateTraversalFraction } from './utils/update-traversal-fraction';
import { updateCameraPosition } from './utils/update-camera-position';
import { updateCameraViewingAngle } from './utils/update-camera-viewing-angle';
import { AbstractToyModel } from './abstract-scene/abstract-toy-model';
import { IZoomableOrbital } from './models/IZoomableOrbital';
import { BirdsEye } from './scene-entities/birds-eye';
import { getDestinationLookPosition } from './utils/get-destination-look-position';
import { AsteroidBelt } from './scene-entities/asteroid-belt';
import { myprint } from './utils/myprint';
import { addHtmlButtonRow } from './html/add-html-button-row';
import { createDisplayMessageDiv } from './html/create-display-message-div';
import { createSettingsButton } from './html/create-settings-button';
import { createSettingsPanel } from './html/create-settings-panel';

/**
 * Implement a scene for this app with 'real' scene entities
 */
export class SceneManager extends AbstractSceneManager {
  // --->>>

  // User-changeable settings
  // private abundanceRepresentationMode: EAbundanceRepresentationMode =
  // EAbundanceRepresentationMode.TOY_REPRESENTATION;
  // private loadMode: ELoadMode = ELoadMode.BEFORE_ANIMATION;

  // Toy-scalable bodies
  private sun = new Sun();
  private planets: Planet[];
  private asteroids: Asteroid[];
  private asteroidBelts: AsteroidBelt[];
  private birdsEyes: BirdsEye[];

  private starField?: StarField;
  private isToyScale = true;
  private isOrbitsVisible = true;
  private isLogScale = false;
  private toyScalables: AbstractToyModel[];
  private logScalables: AbstractToyModel[] = [];

  // Zooming logic
  private zoomables: IZoomable[] = [];
  private zoomableOrbitals: IZoomableOrbital[] = [];
  private zoomTarget: IZoomable = this.sun;
  private isZoomingPosition = false;
  private isZoomingAngle = false;
  private zoomTraversalFraction = 0;
  private zoomClock = new THREE.Clock(); //Controls movement of camera when touring planets
  private isScenePaused = false;

  public updateDisplayedMessage: (msg: string) => void = () => {
    console.log('denied!');
  };

  constructor(containerId: string) {
    // --->>>

    super(containerId);

    // Add html
    // Message Display
    const { displayMessageDiv, updateMessageCb } = createDisplayMessageDiv();
    this._container.append(displayMessageDiv);
    this.updateDisplayedMessage = updateMessageCb;
    this.updateDisplayedMessage('Loading...');
    // Search field
    const searchFieldDiv = createSearchField(this.tryToStartZooming);
    this._container.append(searchFieldDiv);
    // Buttons in main display
    !false &&
      addHtmlButtonRow(
        [
          { label: 'Toggle Toy Scale', cb: this.toggleIsToyScale },
          { label: 'Toggle helpers', cb: this.toggleHelpersVisibility },
          { label: 'Toggle Orbits', cb: this.toggleIsOrbitsVisible },
          { label: 'Toggle Log Scale', cb: this.toggleIsLogScale },
          { label: 'Toggle Asteroids', cb: this.toggleAsteroids },
        ],
        this._container
      );
    // Settings panel and button
    const { settingsPanelDiv, toggleSettingsPanelCb } = createSettingsPanel();
    this._container.append(settingsPanelDiv);
    const settingsButton = createSettingsButton(toggleSettingsPanelCb);
    this._container.append(settingsButton);

    // Entities
    this.birdsEyes = [new BirdsEye(), new BirdsEye('BIRDSEYELOG', 5)];
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
      new Planet('HAUMEA'),
      new Planet('MAKEMAKE'),
      new Planet('ERIS'),
    ];
    this.asteroids = [
      //
      // new Asteroid('65P'),
    ];
    this.asteroidBelts = [
      new AsteroidBelt(['DISTANTOBJECT', 'MBA', 'NEO1KM', 'PHA'], this),
    ];
    this.starField = new StarField(auToMeters(999));
    this.zoomables = [
      ...this.planets,
      ...this.asteroids,
      ...this.birdsEyes,
      this.sun,
    ];
    this.zoomableOrbitals = [...this.planets, ...this.asteroids];
    this.toyScalables = [
      ...this.planets,
      ...this.asteroids,
      ...this.asteroidBelts,
      this.sun,
    ];
    this.logScalables = [
      ...this.planets,
      ...this.asteroids,
      ...this.asteroidBelts,
    ];

    myprint('Begin registering entities');
    this.registerSceneEntities([
      // this.starField,
      new MiscHelpers(),
      new SimpleLight(0.4),
      new PointLight(5, solarSystemData.SUN.radiusMeters),
      ...this.planets,
      ...this.asteroids,
      ...this.asteroidBelts,
      /** Sun MUST come last due to its sprite-blending quirks **/
      this.sun,
    ]);
    myprint('Finish registering entities');

    // Logic to run before scene initialization
    this._preInitHook = () => {
      const radius = auToMeters(4);
      // const radius = auToMeters(100); // See all planets
      this._initialViewingVector = new THREE.Vector3(0, 0, radius);
    };

    // Logic to run after scene initialization
    this._postInitHook = () => {
      // Misc
      this._controls!.maxDistance = auToMeters(100);
      this.setHelpersVisibility(!true);
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
        // 349450170005.93274,
        // 1508896562129.965,
        // 622420704159.6792
        // 65P
        35426284497.8745,
        -725267146538.4939,
        -111665855099.58893
      );
    };

    // Temp
    // setTimeout(() => this.tryToStartZooming('CERES'), 500);
    setTimeout(() => {
      this.setIsToyScale(true);
      this.tryToStartZooming('BIRDSEYE');
    }, 3500);
    this._camera.up.set(1, 1, 1);

    // Clean up on instance destruction
    this._destroyHook = () => {};
  }

  setIsToyScale = (isToyScale: boolean) => {
    this.isToyScale = !!isToyScale;
    this.toyScalables.forEach(_ => _.setIsZoomToToyScale(this.isToyScale));
  };

  toggleIsToyScale = () => {
    this.isToyScale = !this.isToyScale;
    this.setIsToyScale(this.isToyScale);
  };

  setIsOrbitsVisible = (isOrbitsVisible: boolean) => {
    this.isOrbitsVisible = !!isOrbitsVisible;
    this.zoomableOrbitals.forEach(
      _ => _ instanceof Asteroid || _.setIsOrbitVisible(this.isOrbitsVisible)
    );
  };

  toggleIsOrbitsVisible = () => {
    this.isOrbitsVisible = !this.isOrbitsVisible;
    this.setIsOrbitsVisible(this.isOrbitsVisible);
  };

  toggleAsteroids = () => {
    this.asteroidBelts.forEach(asteroidBelt =>
      asteroidBelt.toggleIsBeltVisible()
    );
  };

  setIsLogScale = (isLogScale: boolean) => {
    this.isLogScale = !!isLogScale;
    this.logScalables.forEach(el => el.toggleIsLogScale());
    this.tryToStartZooming(this.isLogScale ? 'BIRDSEYELOG' : 'BIRDSEYE');
  };

  toggleIsLogScale = () => {
    this.isLogScale = !this.isLogScale;
    this.setIsLogScale(this.isLogScale);
  };

  tryToStartZooming = (text: string) => {
    const TEXT = text.toUpperCase();
    const foundTarget = this.zoomables.find(el => el.NAME === TEXT);
    if (foundTarget) {
      this.isZoomingPosition = true;
      this.isZoomingAngle = true;
      this.zoomTarget = foundTarget;
      this.zoomClock = new THREE.Clock(true);
      this._controls.enabled = true;
    }
  };

  tryToStopZooming = () => {
    if (!this.isZoomingAngle && !this.isZoomingPosition) {
      this._controls.target =
        this.zoomTarget instanceof BirdsEye
          ? new THREE.Vector3(0, 0, 0)
          : this.zoomTarget.getPosition();
      this._controls.enabled = true;
    }
  };

  setIsScenePaused(val: boolean) {
    this.isScenePaused = val;
    if (this.isScenePaused) {
      this._clock.stop();
      this.setIsLoaderDivVisible(true, 0);
    } else {
      this._clock.start();
      this.setIsLoaderDivVisible(false, 0);
    }
  }

  updateCamera = () => {
    //

    const t = this._clock.getElapsedTime();

    // Zooming logic
    if (this.isZoomingPosition || this.isZoomingAngle) {
      this.zoomTraversalFraction = updateTraversalFraction(this.zoomClock);
      if (this.isZoomingPosition) {
        this.isZoomingPosition = updateCameraPosition(
          this._camera,
          this.zoomTarget,
          this.zoomTraversalFraction
        );
      }
      if (this.isZoomingAngle) {
        this.isZoomingAngle = updateCameraViewingAngle(
          this._camera,
          this.zoomTarget,
          this.zoomTraversalFraction
        );
      } else {
        // Keep looking at target even if position is still updating
        const { x, y, z } = getDestinationLookPosition(this.zoomTarget);
        this._camera.lookAt(x, y, z);
        // this._camera.up.set(1, 1, 1);
        // console.log('0 >>>>', this._camera.up, this._camera.position);
      }
      this.tryToStopZooming();
    } else {
      // Orbit controls only update when NOT zooming
      this._controls.update();
      {
        // const p = this._camera.position;
        // this._camera.position.multiplyScalar(1 + 0.01 * Math.sin(t));
      }
    }

    // Debug
    if (!true && Math.random() < 0.1 && this._clock.elapsedTime < 50) {
      console.log(this._camera.position);
      console.log('>>> ', this._sceneEntities);
    }
  };
}
