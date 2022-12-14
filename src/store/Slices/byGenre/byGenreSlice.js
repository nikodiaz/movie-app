import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
	error: null,
	data: [],
};

const byGenreSlice = createSlice({
	name: 'byGenre',
	initialState,
	reducers: {
		fetchByGenre(state) {
			state.loading = true;
		},
		fetchByGenreSuccess(state, action) {
			state.data = action.payload;
			state.loading = false;
		},
		fetchByGenreFail(state, action) {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const { fetchByGenre, fetchByGenreSuccess, fetchByGenreFail } =
	byGenreSlice.actions;
export default byGenreSlice;
