import {
	FETCH_DETAIL,
	FETCH_DETAIL_FAILURE,
	FETCH_DETAIL_SUCCESS,
} from '../actions/types';

const initialState = {
	loading: false,
	data: {},
	error: null,
};

const detailReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_DETAIL:
			return {
				...state,
				loading: true,
			};
		case FETCH_DETAIL_SUCCESS:
			return {
				data: action.payload,
				loading: false,
				error: null,
			};
		case FETCH_DETAIL_FAILURE:
			return {
				loading: false,
				data: {},
				error: action.payload,
			};
		default:
			return state;
	}
};

export default detailReducer;
