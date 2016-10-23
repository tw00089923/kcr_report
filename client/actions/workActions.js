import axios from 'axios';
import { SET_CURRENT_WORK ,ADD_WORK_TABLE,DELETE_WORK_TABLE,LOADING_WORK} from './types';

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

export function work_all(){
	return dispatch =>{
		return axios.get('api/work/work_all').then( (response)=>{
			dispatch(LoadingWork(response.data));
			console.log(response);
		}).catch( (err)=>{})
	}
} 


export function setCurrentWork(work) {
  return {
    type: SET_CURRENT_WORK,
    work
   
  };
}

// loading all data

export function LoadingWork(work) {
  return {
    type: LOADING_WORK,
    work
   
  };
}


