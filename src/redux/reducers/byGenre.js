import {
	FETCH_BY_GENRE,
	FETCH_BY_GENRE_SUCCESS,
	FETCH_BY_GENRE_FAILURE,
} from '../actions/types';

const initialState = {
	loading: false,
	movies: [],
	error: null,
};

const byGenreReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_BY_GENRE:
			return {
				...state,
				loading: true,
			};
		case FETCH_BY_GENRE_SUCCESS:
			return {
				movies: action.payload,
				loading: false,
				error: null,
			};
		case FETCH_BY_GENRE_FAILURE:
			return {
				loading: false,
				movies: [],
				error: action.payload,
			};
		default:
			return state;
	}
};

export default byGenreReducer;
