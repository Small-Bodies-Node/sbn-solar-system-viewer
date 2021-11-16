import { TAsteroidBeltType } from '../models/TAsteroidBeltType';
import { TCometBeltType } from '../models/TCometBeltType';

/**
 * Maps asteroid belt to a color
 */
export function getAsteroidBeltColor(belt: TAsteroidBeltType | TCometBeltType) {
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
    //
    case 'A': {
      return 'green';
    }
    case 'C': {
      return 'green';
    }
    case 'P': {
      return 'green';
    }
  }
}
