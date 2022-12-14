import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
	error: null,
	data: [],
};

const trendSlice = createSlice({
	name: 'trend',
	initialState,
	reducers: {
		fetchTrending(state) {
			state.loading = true;
		},
		fetchTrendingSuccess(state, action) {
			state.data = action.payload;
			state.loading = false;
		},
		fetchTrendingFail(state, action) {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const { fetchTrending, fetchTrendingSuccess, fetchTrendingFail } =
	trendSlice.actions;
export default trendSlice;
