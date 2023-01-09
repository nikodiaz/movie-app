import * as api from '../../vars';
import { search, searchFail, searchSuccess } from './searchSlice';

const urlSearch = (page, query) =>
	api.BASE_URL +
	api.GET_SEARCH_MOVIE +
	query +
	api.API_KEY_ALT +
	api.PAGE(page);

export const searchMovies = (page, query) => {
	return async (dispatch) => {
		dispatch(search());
		try {
			const res = await fetch(urlSearch(page, query));
			const data = await res.json();
			dispatch(searchSuccess(await data));
		} catch (error) {
			dispatch(searchFail(await error));
		}
	};
};
