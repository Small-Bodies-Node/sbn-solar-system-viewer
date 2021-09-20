import { TAsteroidBeltType } from '../models/TAsteroidBeltType';
import { IAllMergedAsteroidBeltGeometries } from '../models/IAllMergedAsteroidBeltGeometries';
export declare type TBeltHVal = {
    [K in TAsteroidBeltType]: string;
};
/**
 * Function to do the heavy lifting in loading data,
 * computing orbits and creating merged geometries for the asteroid
 * bodies and their tails
 */
export declare function createAsteroidBeltMergedGeometries(belt: TAsteroidBeltType): Promise<IAllMergedAsteroidBeltGeometries>;
