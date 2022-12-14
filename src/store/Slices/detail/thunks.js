import * as api from '../../vars';
import {
	fetchDetails,
	fetchDetailsFail,
	fetchDetailsSuccess,
} from './detailSlice';

const urlDetail = (id) =>
	api.BASE_URL + api.GET_MOVIE(id) + api.API_KEY + api.PARAMS_LANG_SPA;

export const fetchDetail = (id) => {
	return async (dispatch) => {
		dispatch(fetchDetails());
		try {
			const res = await fetch(urlDetail(id));
			const data = await res.json();
			dispatch(fetchDetailsSuccess(await data));
		} catch (error) {
			dispatch(fetchDetailsFail(await error));
		}
	};
};
