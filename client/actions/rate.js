
import axios from 'axios';





export function loadingRate(rate){
	return dispatch => {
		return axios.get('https://www.tbb.com.tw/exchangerates.html?',rate).then( res =>{

			console.log(res);
			// dispatch(setCurrentWork(res.data));
		});
	}


}