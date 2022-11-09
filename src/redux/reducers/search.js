import { SEARCH, SEARCH_SUCCESS, SEARCH_FAILURE } from '../actions/types';

const initialState = {
	loading: false,
	movies: [],
	error: null,
};

const searchReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEARCH:
			return {
				...state,
				loading: true,
			};
		case SEARCH_SUCCESS:
			return {
				movies: action.payload,
				loading: false,
				error: null,
			};
		case SEARCH_FAILURE:
			return {
				loading: false,
				movies: [],
				error: action.payload,
			};
		default:
			return state;
	}
};

export default searchReducer;
