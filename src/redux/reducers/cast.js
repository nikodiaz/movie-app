import {
	FETCH_CAST,
	FETCH_CAST_FAILURE,
	FETCH_CAST_SUCCESS,
} from '../actions/types';

const initialState = {
	data: {},
	loading: false,
	error: null,
};

const castReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_CAST:
			return {
				...state,
				loading: true,
			};
		case FETCH_CAST_SUCCESS:
			return {
				...state,
				loading: false,
				data: action.payload,
			};
		case FETCH_CAST_FAILURE:
			return {
				...state,
				error: action.payload,
			};

		default:
			return state;
	}
};

export default castReducer;
