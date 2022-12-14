import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
	error: null,
	data: [],
};

const popSlice = createSlice({
	name: 'popular',
	initialState,
	reducers: {
		fetchPopular(state) {
			state.loading = true;
		},
		fetchPopularSuccess(state, action) {
			state.loading = false;
			state.data = action.payload;
		},
		fetchPopularFail(state, action) {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const { fetchPopular, fetchPopularFail, fetchPopularSuccess } =
	popSlice.actions;
export default popSlice;
