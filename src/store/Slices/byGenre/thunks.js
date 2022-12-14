import * as api from '../../vars';
import {
	fetchByGenre,
	fetchByGenreFail,
	fetchByGenreSuccess,
} from './byGenreSlice';

const urlByGenre = (page, category) =>
	api.BASE_URL +
	api.GET_MOVIE_BY +
	api.API_KEY +
	api.PARAMS_GENRE +
	category +
	api.PAGE(page);

export const fetchByGenreMovies = (page, category) => {
	return async (dispatch) => {
		dispatch(fetchByGenre());
		try {
			const res = await fetch(urlByGenre(page, category));
			const data = await res.json();
			dispatch(fetchByGenreSuccess(await data));
		} catch (error) {
			dispatch(fetchByGenreFail(await error));
		}
	};
};
