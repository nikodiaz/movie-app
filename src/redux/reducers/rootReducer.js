import { combineReducers } from 'redux';
import popularReducer from './popularReducer';
import genresReducer from './genresReducer';
import trendReducer from './trendReducer';

const rootReducer = combineReducers({
	popular: popularReducer,
	genres: genresReducer,
	trending: trendReducer,
});

export default rootReducer;
