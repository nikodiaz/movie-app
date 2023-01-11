import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	error: null,
	loading: false,
	series: {
		latest: [],
		trend: [],
		byGenre: [],
		popular: [],
	},
	genres: [],
	detail: {},
};

const tvSlice = createSlice({
	name: 'tv',
	initialState,
	reducers: {
		fetchStart(state) {
			state.loading = true;
		},
		fetchFail(state, action) {
			state.loading = false;
			state.error = action.payload;
		},
		fetchLatestSuccess(state, action) {
			state.loading = false;
			state.series.latest = action.payload;
		},
		fetchPopularSuccess(state, action) {
			state.loading = false;
			state.movies.popular = action.payload;
		},
		fetchTrendSuccess(state, action) {
			state.loading = false;
			state.movies.trending = action.payload;
		},
		fetchGenresSuccess(state, action) {
			state.loading = false;
			state.genres = action.payload;
		},
		fetchByGenreSuccess(state, action) {
			state.loading = false;
			state.movies.by_genre = action.payload;
		},
		fetchDetailsSuccess(state, action) {
			state.loading = false;
			state.detail = action.payload;
		},
	},
});

export const {
	fetchStart,
	fetchFail,
	fetchByGenreSuccess,
	fetchDetailsSuccess,
	fetchGenresSuccess,
	fetchLatestSuccess,
	fetchPopularSuccess,
	fetchTrendSuccess,
} = tvSlice.actions;
export default tvSlice;
