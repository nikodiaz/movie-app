import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
	genres: [],
	error: null,
};

const genreSlice = createSlice({
	name: 'genres',
	initialState,
	reducers: {
		fetchGenres(state) {
			state.loading = true;
		},
		fetchGenresSuccess(state, action) {
			state.loading = false;
			state.genres = action.payload;
		},
		fetchGenresFail(state, action) {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const { fetchGenres, fetchGenresFail, fetchGenresSuccess } =
	genreSlice.actions;
export default genreSlice;
