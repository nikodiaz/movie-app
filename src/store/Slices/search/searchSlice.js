import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    search(state) {
      state.loading = true;
    },
    searchSuccess(state, action) {
      state.data = action.payload;
      state.loading = false;
    },
    searchFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { search, searchSuccess, searchFail } = searchSlice.actions;
export default searchSlice;
