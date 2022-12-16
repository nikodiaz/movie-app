import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
	error: null,
	movies: {
		popular: [],
		trending: [],
		by_genre: [],
	},
	genres: [],
	detail: {},
};

const movieSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {
		fetchMovies(state) {
			state.loading = true;
		},
		fetchPopularSuccess(state, action) {
			state.loading = false;
			state.movies.popular = action.payload;
		},
		fetchPopularFail(state, action) {
			state.loading = false;
			state.error = action.payload;
		},
		fetchTrendSuccess(state, action) {
			state.loading = false;
			state.movies.trending = action.payload;
		},
		fetchTrendFail(state, action) {
			state.loading = false;
			state.error = action.payload;
		},
		fetchGenresSuccess(state, action) {
			state.loading = false;
			state.genres = action.payload;
		},
		fetchGenresFail(state, action) {
			state.loading = false;
			state.error = action.payload;
		},
		fetchByGenreSuccess(state, action) {
			state.loading = false;
			state.movies.by_genre = action.payload;
		},
		fetchByGenreFail(state, action) {
			state.loading = false;
			state.error = action.payload;
		},
		fetchDetailsSuccess(state, action) {
			state.loading = false;
			state.detail = action.payload;
		},
		fetchDetailsFail(state, action) {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const {
	fetchMovies,
	fetchPopularSuccess,
	fetchPopularFail,
	fetchTrendSuccess,
	fetchTrendFail,
	fetchByGenreSuccess,
	fetchByGenreFail,
	fetchGenresSuccess,
	fetchGenresFail,
	fetchDetailsSuccess,
	fetchDetailsFail,
} = movieSlice.actions;
export default movieSlice;
