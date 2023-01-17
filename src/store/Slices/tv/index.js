import * as api from '../../vars';
import {
  fetchStart,
  fetchByGenreSuccess,
  fetchDetailsSuccess,
  fetchFail,
  fetchGenresSuccess,
  fetchLatestSuccess,
  fetchPopularSuccess,
  fetchTrendSuccess,
} from './tvSlice';

// endpoints

const urlLatest =
  api.BASE_URL +
  api.GET_LATEST +
  api.TYPE_TV +
  api.API_KEY +
  api.PARAMS_LANG_SPA;

const urlTrend = (time) =>
  api.BASE_URL +
  api.GET_TRENDING +
  api.TYPE_TV +
  time +
  api.API_KEY +
  api.PARAMS_LANG_SPA;

const urlByGenre = (page, category) =>
  api.BASE_URL +
  api.DISCOVER +
  api.TYPE_TV +
  api.API_KEY +
  api.PARAMS_GENRE +
  category +
  api.PAGE(page);

const urlPop =
  api.BASE_URL +
  api.TYPE_TV +
  api.GET_POPULAR +
  api.API_KEY +
  api.PARAMS_LANG_SPA;

const urlGenre =
  api.BASE_URL +
  api.GET_GENRES(api.TYPE_TV) +
  api.API_KEY +
  api.PARAMS_LANG_SPA;

const urlDetail = (id) =>
  api.BASE_URL + api.GET_TV(id) + api.API_KEY + api.PARAMS_LANG_SPA;

// Latest

export const fetchLatestTv = () => {
  return async (dispatch) => {
    dispatch(fetchStart());
    try {
      const res = await fetch(urlLatest);
      const data = await res.json();
      dispatch(fetchLatestSuccess(await data));
    } catch (error) {
      dispatch(fetchFail(await error));
    }
  };
};

// Trending

export const fetchTrendTv = (time = api.TIME_DAY) => {
  return async (dispatch) => {
    dispatch(fetchStart());
    try {
      const res = await fetch(urlTrend(time));
      const data = await res.json();
      dispatch(fetchTrendSuccess(await data));
    } catch (error) {
      dispatch(fetchFail(await error));
    }
  };
};

// Genres

export const fetchTvGenres = () => {
  return async (dispatch) => {
    dispatch(fetchStart());
    try {
      const res = await fetch(urlGenre);
      const data = await res.json();
      dispatch(fetchGenresSuccess(await data));
    } catch (error) {
      dispatch(fetchFail(await error));
    }
  };
};

// By Genre

export const fetchByGenreTv = (page, category) => {
  return async (dispatch) => {
    dispatch(fetchStart());
    try {
      const res = await fetch(urlByGenre(page, category));
      const data = await res.json();
      dispatch(fetchByGenreSuccess(await data));
    } catch (error) {
      dispatch(fetchFail(await error));
    }
  };
};

// Popular

export const fetchPopularTv = () => {
  return async (dispatch) => {
    dispatch(fetchStart());
    try {
      const res = await fetch(urlPop);
      const data = await res.json();
      dispatch(fetchPopularSuccess(await data));
    } catch (error) {
      dispatch(fetchFail(await error));
    }
  };
};

// Details

export const fetchTvDetail = (id) => {
  return async (dispatch) => {
    dispatch(fetchStart());
    try {
      const res = await fetch(urlDetail(id));
      const data = await res.json();
      dispatch(fetchDetailsSuccess(await data));
    } catch (error) {
      dispatch(fetchFail(await error));
    }
  };
};
