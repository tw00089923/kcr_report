import axios from 'axios';
import { SET_CURRENT_WORK } from './types';

export function createWork(work){
	return dispatch => {
		return axios.post('/api/work',work);
	}
}

export function loadingwork(work){
	return dispatch => {
		return axios.get('/api/work',work).then( res=> {


			console.log("ok");
		});
	}


}


export function setCurrentWork(work) {
  return {
    type: SET_CURRENT_WORK,
    work
  };
}