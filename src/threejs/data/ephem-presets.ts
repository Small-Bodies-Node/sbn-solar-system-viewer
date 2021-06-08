import { SKEphem } from '../utils/sk-ephem';

/**
 * A dictionary containing ephemerides of planets and other well-known objects.
 * @example
 * const planet1 = viz.createObject('planet1', {
 *   ephem: EphemPresets.MERCURY,
 * });
 */
export const EphemPresets = {
  // See https://ssd.jpl.nasa.gov/?planet_pos and https://ssd.jpl.nasa.gov/txt/p_elem_t1.txt
  MERCURY: new SKEphem(
    {
      epoch: 2458426.5,
      a: 3.870968969437096e-1,
      e: 2.056515875393916e-1,
      i: 7.003891682749818,
      om: 4.830774804443502e1,
      w: 2.917940253442659e1,
      ma: 2.56190975209273e2,
    },
    'deg',
    true /* locked */
  ),
  VENUS: new SKEphem(
    {
      epoch: 2458426.5,
      a: 7.233458663591554e-1,
      e: 6.762510759617694e-3,
      i: 3.394567787211735,
      om: 7.662534150657346e1,
      w: 5.474567447560867e1,
      ma: 2.756687596099721e2,
    },
    'deg',
    true /* locked */
  ),
  EARTH: new SKEphem(
    {
      // Taken from https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html
      /*
    epoch: 2451545.0,
    a: 1.00000011,
    e: 0.01671022,
    i: 0.00005,
    om: -11.26064,
    wBar: 102.94719,
    L: 100.46435,
    */

      // https://ssd.jpl.nasa.gov/txt/p_elem_t1.txt
      epoch: 2451545.0,
      a: 1.00000261,
      e: 0.01671123,
      i: -0.00001531,
      om: 0.0,
      wBar: 102.93768193,
      L: 100.46457166,

      /*
      epoch: 2458426.500000000,
      a: 1.000618919441359E+00,
      e: 1.676780871638673E-02,
      i: 0,
      om: 1.888900932218542E+02,
      w: 2.718307282052625E+02,
      ma: 3.021792498388233E+02,
     */
    },
    'deg',
    true /* locked */
  ),
  MOON: new SKEphem(
    {
      // https://nssdc.gsfc.nasa.gov/planetary/factsheet/moonfact.html
      GM: 0.3986e6,

      // Geocentric
      // https://ssd.jpl.nasa.gov/horizons.cgi#results
      epoch: 2458621.5,
      a: 2.582517063772124e-3,
      e: 4.582543645168888e-2,
      i: 5.102060246928811,
      om: 1.085916732144811e2,
      w: 6.180561793729225e1,
      ma: 5.053270083636792e1,
      /*
     * heliocentric
    epoch: 2458621.500000000,
    a: 1.078855621785179E+00,
    e: 6.333300212090676E-02,
    i: 7.211217382317713E-02,
    om: 6.722057157026397E+01,
    w: 1.503642883585293E+02,
    ma: 1.666758688084831E+01,
   */
    },
    'deg',
    true /* locked */
  ),
  MARS: new SKEphem(
    {
      epoch: 2458426.5,
      a: 1.52371401537107,
      e: 9.336741335309606e-2,
      i: 1.848141099825311,
      om: 4.950420572080223e1,
      w: 2.866965847685386e2,
      ma: 2.538237617924876e1,
    },
    'deg',
    true /* locked */
  ),
  ///
  CERES: new SKEphem(
    {
      // Sources:
      // https://www.princeton.edu/~willman/planetary_systems/Sol/Ceres/
      // https://en.wikipedia.org/wiki/Ceres_(dwarf_planet)
      epoch: 2458600.5,
      a: 2.7658,
      e: 0.078,
      i: 10.607,
      om: 80.7,
      w: 73.1,
      ma: 77.37209589,
    },
    'deg',
    true /* locked */
  ),
  ///
  JUPITER: new SKEphem(
    {
      epoch: 2458426.5,
      a: 5.20180355911023,
      e: 4.89912558249006e-2,
      i: 1.303560894624275,
      om: 1.005203828847816e2,
      w: 2.73736301845404e2,
      ma: 2.31939544389401e2,
    },
    'deg',
    true /* locked */
  ),
  SATURN: new SKEphem(
    {
      epoch: 2458426.5,
      a: 9.577177295536776,
      e: 5.101889921719987e-2,
      i: 2.482782449972317,
      om: 1.136154964073247e2,
      w: 3.394422648650336e2,
      ma: 1.870970898012944e2,
    },
    'deg',
    true /* locked */
  ),
  URANUS: new SKEphem(
    {
      epoch: 2458426.5,
      a: 1.914496966635462e1,
      e: 4.832662948112808e-2,
      i: 7.697511134483724e-1,
      om: 7.414239045667875e1,
      w: 9.942704504702185e1,
      ma: 2.202603033874267e2,
    },
    'deg',
    true /* locked */
  ),
  NEPTUNE: new SKEphem(
    {
      epoch: 2458426.5,
      a: 3.00962226342805e1,
      e: 7.36257118719377e-3,
      i: 1.774569249829094,
      om: 1.318695882492132e2,
      w: 2.586226409499831e2,
      ma: 3.152804988924479e2,
    },
    'deg',
    true /* locked */
  ),
  PLUTO: new SKEphem(
    {
      epoch: 2454000.5,
      a: 39.4450697257,
      e: 0.250248713478,
      i: 17.0890009196,
      om: 110.376957955,
      w: 112.597141677,
      ma: 25.2471897122,
    },
    'deg',
    true /* locked */
  ),
  HAUMEA: new SKEphem(
    {
      epoch: 2459200.5,
      a: 43.116,
      e: 0.19642,
      i: 28.2137,
      om: 122.167,
      w: 239.041,
      ma: 218.205,
    },
    'deg',
    true /* locked */
  ),
  MAKEMAKE: new SKEphem(
    {
      epoch: 2458900.5,
      a: 45.43,
      e: 0.16126,
      i: 28.9835,
      om: 79.62,
      w: 294.834,
      ma: 165.514,
    },
    'deg',
    true /* locked */
  ),
  ERIS: new SKEphem(
    {
      epoch: 2459000.5,
      a: 67.864,
      e: 0.43607,
      i: 44.04,
      om: 35.951,
      w: 151.639,
      ma: 205.989,
    },
    'deg',
    true /* locked */
  ),
};

// a?: number; // Semimajor axis
// e?: number; // Eccentricity
// i?: number; // Inclination
// epoch?: number; // Epoch in JD
// period?: number; // Period in days
// ma?: number; // Mean anomaly
// n?: number; // Mean motion
// L?: number; // Mean longitude
// om?: number; // Longitude of Ascending Node ===> "Node" in MPC asteroids
// w?: number; // Argument of Perihelion ===> "Peri" in MPC asteroids
// wBar?: number; // Longitude of Perihelion
// GM?: number; // Standard gravitational parameter in km^3/s^2.
