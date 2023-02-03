import * as api from '../../vars';
import { fetchCast, fetchCastFail, fetchCastSuccess } from './castSlice';

const urlCastMovie = (id) =>
  api.BASE_URL + api.GET_MOVIE(id) + api.GET_CAST + api.API_KEY;
const urlCastTv = (id) =>
  api.BASE_URL + api.GET_TV(id) + api.GET_CAST + api.API_KEY;

export const fetchCasting = (id, media) => {
  return async (dispatch) => {
    dispatch(fetchCast());
    try {
      const res = await fetch(
        media === 'movie' ? urlCastMovie(id) : urlCastTv(id)
      );
      const data = await res.json();
      dispatch(fetchCastSuccess(await data));
    } catch (error) {
      dispatch(fetchCastFail(await error));
    }
  };
};
