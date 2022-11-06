import {
	FETCH_GENRES,
	FETCH_GENRES_FAILURE,
	FETCH_GENRES_SUCCESS,
	FETCH_POPULAR,
	FETCH_POPULAR_FAILURE,
	FETCH_POPULAR_SUCCESS,
	FETCH_TRENDING,
	FETCH_TRENDING_FAILURE,
	FETCH_TRENDING_SUCCESS,
} from './types';
import { getData } from '../../services/getData';

//Action Creators

//Popular Movies

export const fetchPopular = () => ({
	type: FETCH_POPULAR,
});

export const fetchPopularSuccess = (response) => ({
	type: FETCH_POPULAR_SUCCESS,
	payload: response,
});

export const fetchPopularFailure = (error) => ({
	type: FETCH_POPULAR_FAILURE,
	payload: error,
});

//Trending

export const fetchTrending = () => ({
	type: FETCH_TRENDING,
});

export const fetchTrendingSuccess = (response) => ({
	type: FETCH_TRENDING_SUCCESS,
	payload: response,
});

export const fetchTrendingFailure = (error) => ({
	type: FETCH_TRENDING_FAILURE,
	payload: error,
});

//Genres

export const fetchGenres = () => ({
	type: FETCH_GENRES,
});

export const fetchGenresSuccess = (response) => ({
	type: FETCH_GENRES_SUCCESS,
	payload: response,
});

export const fetchGenresFailure = (error) => ({
	type: FETCH_GENRES_FAILURE,
	payload: error,
});

//Asyncronous Request

export const fetchTrendingMovies = (url) => (dispatch) => {
	dispatch(fetchTrending());
	getData(url)
		.then((res) => {
			dispatch(fetchTrendingSuccess(res));
		})
		.catch((error) => dispatch(fetchTrendingFailure(error)));
};

export const fetchPopularMovies = (url) => (dispatch) => {
	dispatch(fetchPopular());
	getData(url)
		.then((res) => {
			dispatch(fetchPopularSuccess(res));
		})
		.catch((error) => fetchPopularFailure(error));
};

export const fetchMovieGenres = (url) => (dispatch) => {
	dispatch(fetchGenres());
	getData(url)
		.then((res) => {
			dispatch(fetchGenresSuccess(res));
		})
		.catch((error) => fetchGenresFailure(error));
};
