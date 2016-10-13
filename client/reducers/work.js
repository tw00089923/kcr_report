import { SET_CURRENT_WORK } from '../actions/types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
  work: {}
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case SET_CURRENT_WORK:
      return { work_number:action.work.work_number, work_name:action.work.work_name,work_material:action.work.work_material}
    default: return state;
  }
}


// Object.assign({}, state, {
//         work: action.work
//       })