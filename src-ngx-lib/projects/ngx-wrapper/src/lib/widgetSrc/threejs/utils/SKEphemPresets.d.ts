import { SKEphem } from './SKEphem';
/**
 * A dictionary containing ephemerides of planets and other well-known objects.
 * @example
 * const planet1 = viz.createObject('planet1', {
 *   ephem: EphemPresets.MERCURY,
 * });
 */
export declare const EphemPresets: {
    MERCURY: SKEphem;
    VENUS: SKEphem;
    EARTH: SKEphem;
    MOON: SKEphem;
    MARS: SKEphem;
    JUPITER: SKEphem;
    SATURN: SKEphem;
    URANUS: SKEphem;
    NEPTUNE: SKEphem;
    PLUTO: SKEphem;
};
/**
 * A class for fetching orbital elements of natural satellites in our solar
 * system.
 */
export declare class NaturalSatellites {
    private _satellitesByPlanet;
    constructor();
    init(): this;
    /**
     * Get a list of satellites and their orbital elements for a given planet.
     * @param {String} planetName Name of a planet, e.g. "Jupiter"
     * @return {Object} List containing a list of dictionaries with information
     * on each satellite.
     */
    getSatellitesForPlanet(planetName: string): any;
    load(): this;
}
