import * as api from '../../vars';
import {
	fetchMovies,
	fetchByGenreFail,
	fetchByGenreSuccess,
	fetchPopularFail,
	fetchPopularSuccess,
	fetchTrendFail,
	fetchTrendSuccess,
	fetchGenresSuccess,
	fetchGenresFail,
	fetchDetailsSuccess,
	fetchDetailsFail,
} from './movieSlice';

//endpoints

const urlTrend = (type, time) =>
	api.BASE_URL +
	api.GET_TRENDING +
	type +
	time +
	api.API_KEY +
	api.PARAMS_LANG_SPA;

const urlByGenre = (page, category) =>
	api.BASE_URL +
	api.DISCOVER +
	api.TYPE_MOVIE +
	api.API_KEY +
	api.PARAMS_GENRE +
	category +
	api.PAGE(page);

const urlPop =
	api.BASE_URL +
	api.TYPE_MOVIE +
	api.GET_POPULAR +
	api.API_KEY +
	api.PARAMS_LANG_SPA;

const urlGenre =
	api.BASE_URL +
	api.GET_GENRES(api.TYPE_MOVIE) +
	api.API_KEY +
	api.PARAMS_LANG_SPA;

const urlDetail = (id) =>
	api.BASE_URL + api.GET_MOVIE(id) + api.API_KEY + api.PARAMS_LANG_SPA;

//Trending

export const fetchTrendingMovies = (
	type = api.TYPE_ALL,
	time = api.TIME_DAY,
) => {
	return async (dispatch) => {
		dispatch(fetchMovies());
		try {
			const res = await fetch(urlTrend(type, time));
			const data = await res.json();
			dispatch(fetchTrendSuccess(await data));
		} catch (error) {
			dispatch(fetchTrendFail(await error));
		}
	};
};

//Genres

export const fetchMovieGenres = (url = urlGenre) => {
	return async (dispatch) => {
		dispatch(fetchMovies());
		try {
			const res = await fetch(url);
			const data = await res.json();
			dispatch(fetchGenresSuccess(await data));
		} catch (error) {
			dispatch(fetchGenresFail(await error));
		}
	};
};

//By Genre

export const fetchByGenreMovies = (page, category) => {
	return async (dispatch) => {
		dispatch(fetchMovies());
		try {
			const res = await fetch(urlByGenre(page, category));
			const data = await res.json();
			dispatch(fetchByGenreSuccess(await data));
		} catch (error) {
			dispatch(fetchByGenreFail(await error));
		}
	};
};

//Popular

export const fetchPopularMovies = (url = urlPop) => {
	return async (dispatch) => {
		dispatch(fetchMovies());
		try {
			const res = await fetch(url);
			const data = await res.json();
			dispatch(fetchPopularSuccess(await data));
		} catch (error) {
			dispatch(fetchPopularFail(await error));
		}
	};
};

//Movie Details

export const fetchDetail = (id) => {
	return async (dispatch) => {
		dispatch(fetchMovies());
		try {
			const res = await fetch(urlDetail(id));
			const data = await res.json();
			dispatch(fetchDetailsSuccess(await data));
		} catch (error) {
			dispatch(fetchDetailsFail(await error));
		}
	};
};
