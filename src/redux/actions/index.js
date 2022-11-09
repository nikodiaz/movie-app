import { getData } from '../../services/getData';
import {
	FETCH_CAST,
	FETCH_CAST_FAILURE,
	FETCH_CAST_SUCCESS,
	FETCH_DETAIL,
	FETCH_DETAIL_FAILURE,
	FETCH_DETAIL_SUCCESS,
	FETCH_GENRES,
	FETCH_GENRES_FAILURE,
	FETCH_GENRES_SUCCESS,
	FETCH_POPULAR,
	FETCH_POPULAR_FAILURE,
	FETCH_POPULAR_SUCCESS,
	FETCH_TRAILERS,
	FETCH_TRAILERS_FAILURE,
	FETCH_TRAILERS_SUCCESS,
	FETCH_TRENDING,
	FETCH_TRENDING_FAILURE,
	FETCH_TRENDING_SUCCESS,
} from './types';

///////////////////////
////ACTION CREATORS////
///////////////////////

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

//Movie Detail

export const fetchMovieDetail = () => ({
	type: FETCH_DETAIL,
});

export const fetchMovieDetailSuccess = (response) => ({
	type: FETCH_DETAIL_SUCCESS,
	payload: response,
});

export const fetchMovieDetailFailure = (error) => ({
	type: FETCH_DETAIL_FAILURE,
	payload: error,
});

//Casts

export const fetchMovieCast = () => ({
	type: FETCH_CAST,
});

export const fetchMovieCastSuccess = (response) => ({
	type: FETCH_CAST_SUCCESS,
	payload: response,
});

export const fetchMovieCastFailure = (error) => ({
	type: FETCH_CAST_FAILURE,
	payload: error,
});

//Trailers

export const fetchMovieTrailers = () => ({
	type: FETCH_TRAILERS,
});

export const fetchMovieTrailersSuccess = (response) => ({
	type: FETCH_TRAILERS_SUCCESS,
	payload: response,
});

export const fetchMovieTrailersFailure = (error) => ({
	type: FETCH_TRAILERS_FAILURE,
	payload: error,
});

///////////////////////////
////ASYNCRONOUS REQUEST////
///////////////////////////

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

export const fetchDetail = (url) => (dispatch) => {
	dispatch(fetchMovieDetail());
	getData(url)
		.then((res) => {
			dispatch(fetchMovieDetailSuccess(res));
		})
		.catch((error) => dispatch(fetchMovieDetailFailure(error)));
};

export const fetchCast = (url) => (dispatch) => {
	dispatch(fetchMovieCast());
	getData(url)
		.then((res) => {
			dispatch(fetchMovieCastSuccess(res));
		})
		.catch((error) => dispatch(fetchMovieCastFailure(error)));
};

export const fetchTrailers = (url) => (dispatch) => {
	dispatch(fetchMovieTrailers());
	getData(url)
		.then((res) => {
			dispatch(fetchMovieTrailersSuccess(res));
		})
		.catch((error) => dispatch(fetchMovieTrailersFailure(error)));
};
