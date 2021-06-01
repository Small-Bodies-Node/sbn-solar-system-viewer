import { planets } from '../data/basic-planet-data';
import { IXYZ } from '../models/IXYZ';
export declare type TPlanets = typeof planets[number];
export declare function getPlanetPosition(name: TPlanets, tCenturiesSinceJ200: number): IXYZ;
