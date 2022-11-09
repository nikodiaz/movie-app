import { combineReducers } from 'redux';
import popularReducer from './popular';
import genresReducer from './genres';
import trendReducer from './trend';
import detailReducer from './detail';
import castReducer from './cast';
import trailerReducer from './trailers';

const rootReducer = combineReducers({
	popular: popularReducer,
	genres: genresReducer,
	trending: trendReducer,
	movie: detailReducer,
	cast: castReducer,
	trailers: trailerReducer,
});

export default rootReducer;
