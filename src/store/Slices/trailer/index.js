import * as api from '../../vars';
import {
  fetchTrailer,
  fetchTrailerFail,
  fetchTrailerSuccess,
} from './trailerSlice';

const urlVideo = (id) =>
  api.BASE_URL + api.GET_MOVIE(id) + api.GET_VIDEO + api.API_KEY;

const urlTvVideo = (id) =>
  api.BASE_URL + api.GET_TV(id) + api.GET_VIDEO + api.API_KEY;

export const fetchTrailers = (id, media) => {
  return async (dispatch) => {
    dispatch(fetchTrailer());
    try {
      const res = await fetch(
        media === 'movie' ? urlVideo(id) : urlTvVideo(id)
      );
      const data = await res.json();
      dispatch(fetchTrailerSuccess(await data));
    } catch (error) {
      dispatch(fetchTrailerFail(await error));
    }
  };
};
