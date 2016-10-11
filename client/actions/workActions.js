import axios from 'axios';

export function createWork(work){
	return dispatchc => {
		return axios.post('/api/work',work);
	}
}