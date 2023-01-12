import { createSlice } from '@reduxjs/toolkit';

const movies =
	localStorage.getItem('myFavs') !== null
		? JSON.parse(localStorage.getItem('myFavs')).movies
		: [];
const tvSeries =
	localStorage.getItem('myFavs') !== null
		? JSON.parse(localStorage.getItem('myFavs')).tvSeries
		: [];

const initialState = {
	movies,
	tvSeries,
};

const favsSlice = createSlice({
	name: 'favs',
	initialState,
	reducers: {
		addFav(state, action) {
			action.payload.title !== undefined
				? state.movies.push(action.payload)
				: state.tvSeries.push(action.payload);
			localStorage.setItem('myFavs', JSON.stringify(state));
		},
		removeFav(state, action) {
			const movieIsAdded = state.movies.find(
				(movie) => movie.id === action.payload.id,
			);
			const tvIsAdded = state.tvSeries.find(
				(tv) => tv.id === action.payload.id,
			);
			if (action.payload.title !== undefined && movieIsAdded) {
				state.movies.splice(state.movies.indexOf(movieIsAdded), 1);
			}
			if (action.payload.name !== undefined && tvIsAdded) {
				state.tvSeries.splice(state.tvSeries.indexOf(tvIsAdded), 1);
			}
			localStorage.setItem('myFavs', JSON.stringify(state));
		},
	},
});

export const { addFav, removeFav } = favsSlice.actions;
export default favsSlice;
