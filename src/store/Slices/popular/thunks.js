import * as api from '../../vars';
import {
	fetchPopular,
	fetchPopularSuccess,
	fetchPopularFail,
} from './popSlice';

const urlPop =
	api.BASE_URL + api.GET_MOVIE_POPULAR + api.API_KEY + api.PARAMS_LANG_SPA;

export const fetchPopularMovies = (url = urlPop) => {
	return async (dispatch) => {
		dispatch(fetchPopular());
		try {
			const res = await fetch(url);
			const data = await res.json();
			dispatch(fetchPopularSuccess(await data));
		} catch (error) {
			dispatch(fetchPopularFail(await error));
		}
	};
};
