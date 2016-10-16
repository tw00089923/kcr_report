import { SET_CURRENT_WORK ,ADD_WORK_TABLE, DELETE_WORK_TABLE } from '../actions/types';


import isEmpty from 'lodash/isEmpty';

const initialState = {
  work: {} ,
  work_tabel:[0]
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case SET_CURRENT_WORK:
      return { work_number:action.work.work_number, work_name:action.work.work_name,work_material:action.work.work_material};
   	case ADD_WORK_TABLE: 
   		return {work_tabel:work_tabel.concat(["1"])};
   	case DELETE_WORK_TABLE: 
   		return {work_tabel:work_tabel.concat(["1"])};

    default: return state;


  }
}



// Object.assign({}, state, {
//         work: action.work
//       })