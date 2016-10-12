import { SET_WORK } from '../actions/types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
  work: {}
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case SET_WORK:
      return {
        work: action.work,
        host: action.sas
      };
    default: return state;
  }
}
