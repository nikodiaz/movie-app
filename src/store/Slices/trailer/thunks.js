import * as api from '../../vars';
import {
	fetchTrailer,
	fetchTrailerFail,
	fetchTrailerSuccess,
} from './trailerSlice';

const urlVideo = (id) =>
	api.BASE_URL + api.GET_MOVIE(id) + api.GET_VIDEO + api.API_KEY;

export const fetchTrailers = (id) => {
	return async (dispatch) => {
		dispatch(fetchTrailer());
		try {
			const res = await fetch(urlVideo(id));
			const data = await res.json();
			dispatch(fetchTrailerSuccess(await data));
		} catch (error) {
			dispatch(fetchTrailerFail(await error));
		}
	};
};
