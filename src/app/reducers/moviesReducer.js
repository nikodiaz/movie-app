import { URL_POPULAR_MOVIE, API_KEY } from '../../hooks/vars';
import {
	FETCH_POPULAR_MOVIES,
	FETCH_LATEST_MOVIES,
	SEARCH,
} from '../actions/types';

const moviesReducer = (state = [], action) => {
	switch (action.type) {
		case FETCH_POPULAR_MOVIES:
			return [...state, action.data];
			break;

		default:
			break;
	}
};
