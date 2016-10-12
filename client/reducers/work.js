import { SET_CURRENT_WORK } from '../actions/types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
  work: {}
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case SET_CURRENT_WORK:
      return [...state,{
        work: action.works
      }];
    default: return state;
  }
}
