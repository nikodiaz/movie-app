import * as api from '../../vars';
import { fetchGenres, fetchGenresFail, fetchGenresSuccess } from './genreSlice';

const urlGenre =
	api.BASE_URL + api.GET_GENRES + api.API_KEY + api.PARAMS_LANG_SPA;

// export const fetchMovieGenres =
// 	(url = urlGenre) =>
// 	(dispatch) => {
// 		dispatch(fetchGenres());
// 		getData(url)
// 			.then((res) => dispatch(fetchGenresSuccess(res)))
// 			.catch((error) => fetchGenresFail(error));
// 	};

export const fetchMovieGenres = (url = urlGenre) => {
	return async (dispatch) => {
		dispatch(fetchGenres());
		try {
			const res = await fetch(url);
			const data = await res.json();
			dispatch(fetchGenresSuccess(await data));
		} catch (error) {
			dispatch(fetchGenresFail(await error));
		}
	};
};
