import { SET_NT_RATE} from '../actions/types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
  rate : []
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case SET_NT_RATE:
      return [
        ...state
      ];
    default: return state;
  }
}
