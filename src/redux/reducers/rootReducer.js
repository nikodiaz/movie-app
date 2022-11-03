import { combineReducers } from 'redux';
import trendReducer from './trendReducer';
import popularReducer from './popularReducer';

const rootReducer = combineReducers({
	trending_movies: trendReducer,
	popular_movies: popularReducer,
});

export default rootReducer;
