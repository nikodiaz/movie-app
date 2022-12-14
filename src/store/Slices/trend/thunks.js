import * as api from '../../vars';
import {
	fetchTrending,
	fetchTrendingFail,
	fetchTrendingSuccess,
} from './trendSlice';

const urlTrend =
	api.BASE_URL +
	api.GET_TRENDING +
	api.TYPE_MOVIE +
	api.API_KEY +
	api.PARAMS_LANG_SPA;

export const fetchTrendingMovies = () => {
	return async (dispatch) => {
		dispatch(fetchTrending());
		try {
			const res = await fetch(urlTrend);
			const data = await res.json();
			dispatch(fetchTrendingSuccess(await data));
		} catch (error) {
			dispatch(fetchTrendingFail(await error));
		}
	};
};
