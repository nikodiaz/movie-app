import * as api from '../../vars';
import {
  fetchStart,
  fetchByGenreSuccess,
  fetchPopularSuccess,
  fetchTrendSuccess,
  fetchGenresSuccess,
  fetchDetailsSuccess,
  fetchFail,
} from './movieSlice';

// endpoints

const urlLatest =
  api.BASE_URL +
  api.GET_LATEST +
  api.TYPE_MOVIE +
  api.API_KEY +
  api.PARAMS_LANG_SPA;

const urlTrend = (type, time) =>
  api.BASE_URL +
  api.GET_TRENDING +
  type +
  time +
  api.API_KEY +
  api.PARAMS_LANG_SPA;

const urlByGenre = (page, category) =>
  api.BASE_URL +
  api.DISCOVER +
  api.TYPE_MOVIE +
  api.API_KEY +
  api.PARAMS_GENRE +
  category +
  api.PAGE(page);

const urlPop =
  api.BASE_URL +
  api.TYPE_MOVIE +
  api.GET_POPULAR +
  api.API_KEY +
  api.PARAMS_LANG_SPA;

const urlGenre =
  api.BASE_URL +
  api.GET_GENRES(api.TYPE_MOVIE) +
  api.API_KEY +
  api.PARAMS_LANG_SPA;

const urlDetail = (id) =>
  api.BASE_URL + api.GET_MOVIE(id) + api.API_KEY + api.PARAMS_LANG_SPA;

// Latest

export const fetchLatestMovies = () => {
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

export const fetchTrendingMovies = (
  type = api.TYPE_ALL,
  time = api.TIME_DAY
) => {
  return async (dispatch) => {
    dispatch(fetchStart());
    try {
      const res = await fetch(urlTrend(type, time));
      const data = await res.json();
      dispatch(fetchTrendSuccess(await data));
    } catch (error) {
      dispatch(fetchFail(await error));
    }
  };
};

// Genres

export const fetchMovieGenres = () => {
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

export const fetchByGenreMovies = (page, category) => {
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

export const fetchPopularMovies = (url = urlPop) => {
  return async (dispatch) => {
    dispatch(fetchStart());
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch(fetchPopularSuccess(await data));
    } catch (error) {
      dispatch(fetchFail(await error));
    }
  };
};

// Movie Details

export const fetchDetail = (id) => {
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
