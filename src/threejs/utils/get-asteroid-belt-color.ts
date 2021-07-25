import { TAsteroidBeltType } from '../models/TAsteroidBeltType';

/**
 * Maps asteroid belt to a color
 */
export function getAsteroidBeltColor(belt: TAsteroidBeltType) {
  switch (belt) {
    case 'MBA': {
      return 'grey';
    }
    case 'NEO1KM': {
      return 'orange';
    }
    case 'NOT_NEO1KM': {
      return 'pink';
    }
    case 'PHA': {
      return 'red';
    }
    case 'DISTANTOBJECT': {
      return 'cyan';
    }
  }
}
