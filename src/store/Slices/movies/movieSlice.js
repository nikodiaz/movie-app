import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
  movies: {
    popular: [],
    trending: [],
    by_genre: [],
  },
  genres: [],
  detail: {},
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    fetchStart(state) {
      state.loading = true;
    },
    fetchFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    fetchPopularSuccess(state, action) {
      state.loading = false;
      state.movies.popular = action.payload;
    },
    fetchTrendSuccess(state, action) {
      state.loading = false;
      state.movies.trending = action.payload;
    },
    fetchGenresSuccess(state, action) {
      state.loading = false;
      state.genres = action.payload;
    },
    fetchByGenreSuccess(state, action) {
      state.loading = false;
      state.movies.by_genre = action.payload;
    },
    fetchDetailsSuccess(state, action) {
      state.loading = false;
      state.detail = action.payload;
    },
  },
});

export const {
  fetchStart,
  fetchFail,
  fetchPopularSuccess,
  fetchTrendSuccess,
  fetchByGenreSuccess,
  fetchGenresSuccess,
  fetchDetailsSuccess,
} = movieSlice.actions;
export default movieSlice;
