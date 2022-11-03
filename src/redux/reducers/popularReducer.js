import {
	FETCH_POPULAR,
	FETCH_POPULAR_FAILURE,
	FETCH_POPULAR_SUCCESS,
} from '../actions/types';

const initialState = {
	loading: false,
	movies: [],
	error: null,
};

const popularReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_POPULAR:
			return {
				...state,
				loading: true,
			};
		case FETCH_POPULAR_SUCCESS:
			return {
				movies: action.payload,
				loading: false,
				error: null,
			};
		case FETCH_POPULAR_FAILURE:
			return {
				loading: false,
				movies: [],
				error: action.payload,
			};
		default:
			return state;
	}
};

export default popularReducer;
