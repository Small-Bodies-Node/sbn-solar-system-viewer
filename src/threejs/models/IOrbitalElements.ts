export interface IOrbitalElements {
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~>>>

  // e: shape of the ellipse, describing how much it is elongated compared to a circle
  eccentricity: number;

  // a: "length" of ellipse; sum of periapsis and apoapsis
  semiMajorAxis: number;

  // i: Angle between the plane of the ellipse and the reference plane
  inclination: number;

  // Omega: orients the ascending node of the ellipse with respect to the reference frame's vernal point
  longitudeOfAscendingNode: number;

  // omega: aka 'Longitude of perihelion'; angle measured from the ascending node to the periapsis
  argumentOfPeriapsis: number;

  // nu, theta or f: defines the position of the body at some epoch as angle from ascending node
  trueAnomaly: number;
}
