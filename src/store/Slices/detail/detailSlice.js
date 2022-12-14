import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
	error: null,
	data: {},
};

const detailSlice = createSlice({
	name: 'detail',
	initialState,
	reducers: {
		fetchDetails(state) {
			state.loading = true;
		},
		fetchDetailsSuccess(state, action) {
			state.loading = false;
			state.data = action.payload;
		},
		fetchDetailsFail(state, action) {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const { fetchDetails, fetchDetailsFail, fetchDetailsSuccess } =
	detailSlice.actions;
export default detailSlice;
