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
    fetchCastSuccess(state, action) {
      state.loading = false;
      state.data.tv = action.payload;
    },
    fetchCastFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchCast, fetchCastFail, fetchCastSuccess } = castSlice.actions;
export default castSlice;
