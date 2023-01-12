import { configureStore } from '@reduxjs/toolkit';
import castSlice from './Slices/cast/castSlice';
import favsSlice from './Slices/favs/favsSlice';
import movieSlice from './Slices/movies/movieSlice';
import searchSlice from './Slices/search/searchSlice';
import trailerSlice from './Slices/trailer/trailerSlice';
import tvSlice from './Slices/tv/tvSlice';

const store = configureStore({
	reducer: {
		trailer: trailerSlice.reducer,
		cast: castSlice.reducer,
		search: searchSlice.reducer,
		favs: favsSlice.reducer,
		movies: movieSlice.reducer,
		tv: tvSlice.reducer,
	},
});

export default store;
