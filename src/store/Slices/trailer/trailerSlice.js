import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
  data: {},
};

const trailerSlice = createSlice({
  name: 'trailer',
  initialState,
  reducers: {
    fetchTrailer(state) {
      state.loading = true;
    },
    fetchTrailerSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchTrailerFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchTrailer, fetchTrailerFail, fetchTrailerSuccess } =
  trailerSlice.actions;
export default trailerSlice;
