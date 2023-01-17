import * as api from '../../vars';
import {
  fetchCast,
  fetchCastFail,
  fetchCastMovieSuccess,
  fetchCastTvSuccess,
} from './castSlice';

const urlCastMovie = (id) =>
  api.BASE_URL + api.GET_MOVIE(id) + api.GET_CAST + api.API_KEY;
const urlCastTv = (id) =>
  api.BASE_URL + api.GET_TV(id) + api.GET_CAST + api.API_KEY;

export const fetchCasting = (id, media) => {
  return async (dispatch) => {
    dispatch(fetchCast());
    try {
      if (media === 'movie') {
        const res = await fetch(urlCastMovie(id));
        const data = await res.json();
        dispatch(fetchCastMovieSuccess(await data));
      } else if (media === 'tv') {
        const res = await fetch(urlCastTv(id));
        const data = await res.json();
        dispatch(fetchCastTvSuccess(await data));
      }
    } catch (error) {
      dispatch(fetchCastFail(await error));
    }
  };
};
