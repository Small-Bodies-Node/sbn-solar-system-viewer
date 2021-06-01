const METERS_IN_AU = 149597870700;
const SECONDS_IN_DAY = 86400;

const EPHEM_VALID_ATTRS_ARR = [
  'a', // Semi-major axis
  'e', // Eccentricity
  'i', // Inclination
  'q', // Perihelion distance

  'epoch',
  'period', // in days
  'tp', // time of perihelion

  'ma', // Mean anomaly
  'n', // Mean motion
  'L', // Mean longitude

  'om', // Longitude of Ascending Node
  'w', // Argument of Perihelion = Longitude of Perihelion - Longitude of Ascending Node
  'wBar', // Longitude of Perihelion = Longitude of Ascending Node + Argument of Perihelion

  'GM', // Gravitational constant of more massive body
] as const;

type TEphemValidAttrs = typeof EPHEM_VALID_ATTRS_ARR[number];

const EPHEM_VALID_ATTRS = new Set(EPHEM_VALID_ATTRS_ARR);

// Which of these are angular measurements.
const ANGLE_UNITS = new Set(['i', 'ma', 'n', 'L', 'om', 'w', 'wBar']);

// Returns true if object is defined.
function isDef(obj: any) {
  return typeof obj !== 'undefined';
}

type TInitialValues = { [k in TEphemValidAttrs]: number };

/**
 * A class representing Kepler ephemerides.
 * @example
 * const NEPTUNE = new Ephem({
 *   epoch: 2458426.500000000,
 *   a: 3.009622263428050E+01,
 *   e: 7.362571187193770E-03,
 *   i: 1.774569249829094E+00,
 *   om: 1.318695882492132E+02,
 *   w: 2.586226409499831E+02,
 *   ma: 3.152804988924479E+02,
 * }, 'deg'),
 */
export class SKEphem {
  // ~~~>>>

  /**
   * Defaults to GM.SUN.  @see {GM}
   * @param {'deg'|'rad'} units The unit of angles in the list of initial values.
   */

  _attrs: Partial<TInitialValues>;
  _locked = false;
  actualUnits?: string;

  // a?: number; // Semimajor axis
  // e?: number; // Eccentricity
  // i?: number; // Inclination
  // epoch?: number; // Epoch in JD
  // period?: number; // Period in days
  // ma?: number; // Mean anomaly
  // n?: number; // Mean motion
  // L?: number; // Mean longitude
  // om?: number; // Longitude of Ascending Node
  // w?: number; // Argument of Perihelion
  // wBar?: number; // Longitude of Perihelion
  // GM?: number; // Standard gravitational parameter in km^3/s^2.

  constructor(
    initialValues: Partial<TInitialValues>,
    units = 'rad',
    locked = false
  ) {
    this._attrs = { ...initialValues };
    this._locked = false;

    // let attr: keyof TInitialValues;
    // for (attr in initialValues) {
    //   if (!!initialValues[attr]) {
    //     const actualUnits = ANGLE_UNITS.has(attr) ? units : undefined;
    //     const x = initialValues[attr];
    //     if (x) this.set(attr, x, actualUnits);
    //   }
    // }

    if (!!initialValues) {
      Object.keys(initialValues).forEach((key: any) => {
        const actualUnits = ANGLE_UNITS.has(key) ? units : undefined;
        const val = (initialValues as any)[key];
        if (val) this.set(key, val, actualUnits);
      });
    }

    if (typeof this._attrs.GM === 'undefined') {
      this._attrs.GM = GM.SUN;
    }
    this.fill();

    if (this.get('e') > 0.9 && typeof this.get('tp') === 'undefined') {
      console.warn(
        'You must specify "tp" (time of perihelion) for highly eccentric orbits'
      );
    }

    this._locked = locked;
  }

  /**
   * Sets an ephemerides attribute.
   * @param {String} attr The name of the attribute (e.g. 'a')
   * @param {Number} val The value of the attribute (e.g. 0.5)
   * @param {'deg'|'rad'} units The unit of angle provided, if applicable.
   */
  set(attr: TEphemValidAttrs, val: number, units = 'rad') {
    if (this._locked) {
      throw new Error('Attempted to modify locked (immutable) Ephem object');
    }

    if (!EPHEM_VALID_ATTRS.has(attr)) {
      console.warn(`Invalid ephem attr: ${attr}`);
      return false;
    }

    // Store everything in radians.
    if (units === 'deg') {
      this._attrs[attr] = (val * Math.PI) / 180;
    } else {
      this._attrs[attr] = val;
    }
    return true;
  }

  /**
   * Gets an ephemerides attribute.
   * @param {String} attr The name of the attribute (e.g. 'a')
   * @param {'deg'|'rad'} units The unit of angle desired, if applicable. This
   * input is ignored for values that are not angle measurements.
   */
  get(attr: TEphemValidAttrs, units = 'rad') {
    // --->>>

    const val = this._attrs[attr]!;
    // if (!val && units !== 'deg') throw new Error('Poor logic to allow non angle attr here');

    return units === 'deg' ? (val * 180) / Math.PI : val;
  }

  /**
   * @private
   * Infers values of some ephemerides attributes if the required information
   * is available.
   */
  fill() {
    // Perihelion distance and semimajor axis
    const e = this.get('e');
    if (!isDef(e)) {
      throw new Error('Must define eccentricity "e" in an orbit');
    }

    // Semimajor axis and perihelion distance
    let a = this.get('a');
    let q = this.get('q');
    if (isDef(a)) {
      if (!isDef(q)) {
        if (e >= 1.0) {
          throw new Error(
            'Must provide perihelion distance "q" if eccentricity "e" is greater than 1'
          );
        }
        q = a * (1.0 - e);
        this.set('q', q);
      }
    } else if (isDef(q)) {
      a = q / (1.0 - e);
      this.set('a', a);
    } else {
      throw new Error(
        'Must define semimajor axis "a" or perihelion distance "q" in an orbit'
      );
    }

    // Longitude/Argument of Perihelion and Long. of Ascending Node
    let w = this.get('w');
    let wBar = this.get('wBar');
    let om = this.get('om');
    if (isDef(w) && isDef(om) && !isDef(wBar)) {
      wBar = w + om;
      this.set('wBar', wBar);
    } else if (isDef(wBar) && isDef(om) && !isDef(w)) {
      w = wBar - om;
      this.set('w', w);
    } else if (isDef(w) && isDef(wBar) && !isDef(om)) {
      om = wBar - w;
      this.set('om', om);
    }

    // Mean motion and period
    const aMeters = a * METERS_IN_AU;
    const n = this.get('n');
    const GM = this.get('GM');
    let period = this.get('period');

    if (!isDef(period) && isDef(a)) {
      period =
        (2 * Math.PI * Math.sqrt((aMeters * aMeters * aMeters) / GM)) /
        SECONDS_IN_DAY;
      this.set('period', period);
    }

    if (e < 1.0) {
      // Only work with mean motion for elliptical orbits.
      if (isDef(period) && !isDef(n)) {
        // Set radians
        const newN = (2.0 * Math.PI) / period;
        this.set('n', newN);
      } else if (isDef(n) && !isDef(period)) {
        this.set('period', (2.0 * Math.PI) / n);
      }
    }

    // Mean longitude
    const ma = this.get('ma');
    let L = this.get('L');
    if (!isDef(L) && isDef(om) && isDef(w) && isDef(ma)) {
      L = om + w + ma;
      this.set('L', L);
    }

    // Mean anomaly
    if (!isDef(ma)) {
      // MA = Mean longitude - Longitude of perihelion
      this.set('ma', L - wBar);
    }

    //  TODO(ian): Handle no om
  }

  /**
   * Make this ephem object immutable.
   */
  lock() {
    this._locked = true;
  }

  copy() {
    return new SKEphem(
      {
        GM: this.get('GM'),
        epoch: this.get('epoch'),
        a: this.get('a'),
        e: this.get('e'),
        i: this.get('i'),
        om: this.get('om'),
        ma: this.get('ma'),
        w: this.get('w'),
      },
      'rad'
    );
  }
}

/**
 * Standard gravitational parameter for objects orbiting these bodies.
 * Units in m^3/s^2
 */
export const GM = {
  // See https://space.stackexchange.com/questions/22948/where-to-find-the-best-values-for-standard-gravitational-parameters-of-solar-sys and https://naif.jpl.nasa.gov/pub/naif/generic_kernels/pck/gm_de431.tpc
  SUN: 1.3271244004193938e20,
  MERCURY: 2.2031780000000021e13,
  VENUS: 3.2485859200000006e14,
  EARTH_MOON: 4.0350323550225981e14,
  MARS: 4.2828375214000022e13,
  JUPITER: 1.2671276480000021e17,
  SATURN: 3.7940585200000003e16,
  URANUS: 5.794548600000008e15,
  NEPTUNE: 6.8365271005800236e15,
  PLUTO_CHARON: 9.7700000000000068e11,
};
