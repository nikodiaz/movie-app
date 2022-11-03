import { getData } from '../../services/getData';
import {
	API_KEY,
	BASE_URL,
	GET_MOVIE_POPULAR,
	GET_TRENDING,
	PARAMS_LANG_SPA,
	TYPE_MOVIE,
} from '../../services/vars';
import {
	fetchPopular,
	fetchPopularFailure,
	fetchPopularSuccess,
	fetchTrending,
	fetchTrendingFailure,
	fetchTrendingSuccess,
} from '../actions';

//Asyncronous Trending

export const fetchTrendingMovies = () => (dispatch) => {
	dispatch(fetchTrending());
	return getData(
		BASE_URL + GET_TRENDING + TYPE_MOVIE + API_KEY + PARAMS_LANG_SPA,
	)
		.then((res) => {
			dispatch(fetchTrendingSuccess(res));
		})
		.catch((error) => dispatch(fetchTrendingFailure(error)));
};

export const fetchPopularMovies = () => (dispatch) => {
	dispatch(fetchPopular());
	return getData(BASE_URL + GET_MOVIE_POPULAR + API_KEY + PARAMS_LANG_SPA)
		.then((res) => {
			dispatch(fetchPopularSuccess(res));
		})
		.catch((error) => fetchPopularFailure(error));
};
