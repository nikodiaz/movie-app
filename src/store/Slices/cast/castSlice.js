import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
  data: {
    movie: {},
    tv: {},
  },
};

const castSlice = createSlice({
  name: 'cast',
  initialState,
  reducers: {
    fetchCast(state) {
      state.loading = true;
    },
    fetchCastMovieSuccess(state, action) {
      state.loading = false;
      state.data.movie = action.payload;
    },
    fetchCastTvSuccess(state, action) {
      state.loading = false;
      state.data.tv = action.payload;
    },
    fetchCastFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchCast,
  fetchCastFail,
  fetchCastMovieSuccess,
  fetchCastTvSuccess,
} = castSlice.actions;
export default castSlice;
