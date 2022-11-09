import { combineReducers } from 'redux';
import popularReducer from './popular';
import genresReducer from './genres';
import trendReducer from './trend';
import detailReducer from './detail';
import castReducer from './cast';
import trailerReducer from './trailers';
import searchReducer from './search';
import byGenreReducer from './byGenre';

const rootReducer = combineReducers({
	popular: popularReducer,
	genres: genresReducer,
	trending: trendReducer,
	movie: detailReducer,
	cast: castReducer,
	trailers: trailerReducer,
	searched: searchReducer,
	by_genre: byGenreReducer,
});

export default rootReducer;
