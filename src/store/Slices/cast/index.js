import * as api from '../../vars';
import { fetchCast, fetchCastFail, fetchCastSuccess } from './castSlice';

const urlCast = (id) =>
	api.BASE_URL + api.GET_MOVIE(id) + api.GET_CAST + api.API_KEY;

export const fetchCasting = (id) => {
	return async (dispatch) => {
		dispatch(fetchCast());
		try {
			const res = await fetch(urlCast(id));
			const data = await res.json();
			dispatch(fetchCastSuccess(await data));
		} catch (error) {
			dispatch(fetchCastFail(await error));
		}
	};
};
