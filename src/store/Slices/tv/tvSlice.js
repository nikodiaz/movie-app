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

const movieSlice = createSlice({
	name: 'tv',
	initialState,
	reducers: {
		fetchStart(state) {
			state.loading = true;
		},
	},
});
