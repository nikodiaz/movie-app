import {
	FETCH_GENRES,
	FETCH_GENRES_FAILURE,
	FETCH_GENRES_SUCCESS,
} from '../actions/types';

const initialState = {
	loading: false,
	genres: [],
	error: null,
};

const genresReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_GENRES:
			return {
				...state,
				loading: true,
			};
		case FETCH_GENRES_SUCCESS:
			return {
				...state,
				genres: action.payload,
			};
		case FETCH_GENRES_FAILURE:
			return {
				...state,
				error: action.payload,
			};

		default:
			return state;
	}
};

export default genresReducer;
