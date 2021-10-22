import {createSlice} from '@reduxjs/toolkit';
import {SearchState} from '../../interfaces/interfaces';
import {searchFilms} from '../actions/async/searchFilms';

const initialState: SearchState = {
  item: [],
  loading: false,
  error: null,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    emptyList: state => {
      state.item = [];
    },
  },
  extraReducers: builder => {
    builder.addCase(searchFilms.fulfilled, (state, action) => {
      state.item = action.payload;
    });
  },
});

export const {emptyList} = searchSlice.actions;
export default searchSlice.reducer;
