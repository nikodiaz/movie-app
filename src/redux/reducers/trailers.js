import {
	FETCH_TRAILERS,
	FETCH_TRAILERS_FAILURE,
	FETCH_TRAILERS_SUCCESS,
} from '../actions/types';

const initialState = {
	data: {},
	loading: false,
	error: null,
};

const trailerReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_TRAILERS:
			return {
				...state,
				loading: true,
			};
		case FETCH_TRAILERS_SUCCESS:
			return {
				...state,
				loading: false,
				data: action.payload,
			};
		case FETCH_TRAILERS_FAILURE:
			return {
				...state,
				error: action.payload,
			};

		default:
			return state;
	}
};

export default trailerReducer;
