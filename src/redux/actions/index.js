import {
	FETCH_POPULAR,
	FETCH_POPULAR_FAILURE,
	FETCH_POPULAR_SUCCESS,
	FETCH_TRENDING,
	FETCH_TRENDING_FAILURE,
	FETCH_TRENDING_SUCCESS,
} from './types';

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
