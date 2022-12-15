import { configureStore } from '@reduxjs/toolkit';
import byGenreSlice from './Slices/byGenre/byGenreSlice';
import castSlice from './Slices/cast/castSlice';
import detailSlice from './Slices/detail/detailSlice';
import favsSlice from './Slices/favs/favsSlice';
import genreSlice from './Slices/genres/genreSlice';
import popSlice from './Slices/popular/popSlice';
import searchSlice from './Slices/search/searchSlice';
import trailerSlice from './Slices/trailer/trailerSlice';
import trendSlice from './Slices/trend/trendSlice';

const store = configureStore({
	reducer: {
		trend: trendSlice.reducer,
		popular: popSlice.reducer,
		genres: genreSlice.reducer,
		detail: detailSlice.reducer,
		trailer: trailerSlice.reducer,
		cast: castSlice.reducer,
		search: searchSlice.reducer,
		byGenre: byGenreSlice.reducer,
		favs: favsSlice.reducer,
	},
});

export default store;
