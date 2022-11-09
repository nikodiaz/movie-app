import {
	FETCH_TRENDING,
	FETCH_TRENDING_FAILURE,
	FETCH_TRENDING_SUCCESS,
} from '../actions/types';

const initialState = {
	loading: false,
	movies: [],
	error: null,
};

const trendReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_TRENDING:
			return {
				...state,
				loading: true,
			};
		case FETCH_TRENDING_SUCCESS:
			return {
				movies: action.payload,
				loading: false,
				error: null,
			};
		case FETCH_TRENDING_FAILURE:
			return {
				loading: false,
				movies: [],
				error: action.payload,
			};
		default:
			return state;
	}
};

export default trendReducer;
