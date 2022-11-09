import { getData } from '../../services/getData';
import * as type from './types';

///////////////////////
////ACTION CREATORS////
///////////////////////

//Popular Movies

export const fetchPopular = () => ({
	type: type.FETCH_POPULAR,
});

export const fetchPopularSuccess = (response) => ({
	type: type.FETCH_POPULAR_SUCCESS,
	payload: response,
});

export const fetchPopularFailure = (error) => ({
	type: type.FETCH_POPULAR_FAILURE,
	payload: error,
});

//Trending

export const fetchTrending = () => ({
	type: type.FETCH_TRENDING,
});

export const fetchTrendingSuccess = (response) => ({
	type: type.FETCH_TRENDING_SUCCESS,
	payload: response,
});

export const fetchTrendingFailure = (error) => ({
	type: type.FETCH_TRENDING_FAILURE,
	payload: error,
});

//Genres

export const fetchGenres = () => ({
	type: type.FETCH_GENRES,
});

export const fetchGenresSuccess = (response) => ({
	type: type.FETCH_GENRES_SUCCESS,
	payload: response,
});

export const fetchGenresFailure = (error) => ({
	type: type.FETCH_GENRES_FAILURE,
	payload: error,
});

//Movie Detail

export const fetchMovieDetail = () => ({
	type: type.FETCH_DETAIL,
});

export const fetchMovieDetailSuccess = (response) => ({
	type: type.FETCH_DETAIL_SUCCESS,
	payload: response,
});

export const fetchMovieDetailFailure = (error) => ({
	type: type.FETCH_DETAIL_FAILURE,
	payload: error,
});

//Casts

export const fetchMovieCast = () => ({
	type: type.FETCH_CAST,
});

export const fetchMovieCastSuccess = (response) => ({
	type: type.FETCH_CAST_SUCCESS,
	payload: response,
});

export const fetchMovieCastFailure = (error) => ({
	type: type.FETCH_CAST_FAILURE,
	payload: error,
});

//Trailers

export const fetchMovieTrailers = () => ({
	type: type.FETCH_TRAILERS,
});

export const fetchMovieTrailersSuccess = (response) => ({
	type: type.FETCH_TRAILERS_SUCCESS,
	payload: response,
});

export const fetchMovieTrailersFailure = (error) => ({
	type: type.FETCH_TRAILERS_FAILURE,
	payload: error,
});

//Search

export const searchMovie = () => ({
	type: type.SEARCH,
});

export const searchMovieSuccess = (response) => ({
	type: type.SEARCH_SUCCESS,
	payload: response,
});

export const searchMovieFailure = (error) => ({
	type: type.SEARCH_FAILURE,
	payload: error,
});

//Discover By Category

export const discoverByGenre = () => ({
	type: type.FETCH_BY_GENRE,
});

export const discoverByGenreSuccess = (response) => ({
	type: type.FETCH_BY_GENRE_SUCCESS,
	payload: response,
});

export const discoverByGenreFailure = (error) => ({
	type: type.FETCH_BY_GENRE_FAILURE,
	payload: error,
});

///////////////////////////
////ASYNCRONOUS REQUEST////
///////////////////////////

export const fetchTrendingMovies = (url) => (dispatch) => {
	dispatch(fetchTrending());
	getData(url)
		.then((res) => dispatch(fetchTrendingSuccess(res)))
		.catch((error) => dispatch(fetchTrendingFailure(error)));
};

export const fetchPopularMovies = (url) => (dispatch) => {
	dispatch(fetchPopular());
	getData(url)
		.then((res) => dispatch(fetchPopularSuccess(res)))
		.catch((error) => fetchPopularFailure(error));
};

export const fetchMovieGenres = (url) => (dispatch) => {
	dispatch(fetchGenres());
	getData(url)
		.then((res) => dispatch(fetchGenresSuccess(res)))
		.catch((error) => fetchGenresFailure(error));
};

export const fetchDetail = (url) => (dispatch) => {
	dispatch(fetchMovieDetail());
	getData(url)
		.then((res) => dispatch(fetchMovieDetailSuccess(res)))
		.catch((error) => dispatch(fetchMovieDetailFailure(error)));
};

export const fetchCast = (url) => (dispatch) => {
	dispatch(fetchMovieCast());
	getData(url)
		.then((res) => dispatch(fetchMovieCastSuccess(res)))
		.catch((error) => dispatch(fetchMovieCastFailure(error)));
};

export const fetchTrailers = (url) => (dispatch) => {
	dispatch(fetchMovieTrailers());
	getData(url)
		.then((res) => dispatch(fetchMovieTrailersSuccess(res)))
		.catch((error) => dispatch(fetchMovieTrailersFailure(error)));
};

export const search = (url) => (dispatch) => {
	dispatch(searchMovie());
	getData(url)
		.then((res) => dispatch(searchMovieSuccess(res)))
		.catch((error) => dispatch(searchMovieFailure(error)));
};

export const discoverByCategory = (url) => (dispatch) => {
	dispatch(discoverByGenre());
	getData(url)
		.then((res) => dispatch(discoverByGenreSuccess(res)))
		.catch((error) => dispatch(discoverByGenreFailure(error)));
};
