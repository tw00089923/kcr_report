import axios from 'axios';
import { SET_CURRENT_WORK ,ADD_WORK_TABLE,DELETE_WORK_TABLE} from './types';

export function createWork(work){
	return dispatch => {
		return axios.post('/api/work',work);
	}
}

export function loadingwork(work){
	return dispatch => {
		return axios.get('/api/work',work).then( res =>{

			console.log(res);
			dispatch(setCurrentWork(res.data));
		});
	}


}


export function setCurrentWork(work) {
  return {
    type: SET_CURRENT_WORK,
    work
   
  };
}

