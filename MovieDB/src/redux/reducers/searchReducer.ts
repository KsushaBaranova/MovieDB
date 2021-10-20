import {createSlice} from '@reduxjs/toolkit';
import {FilmListState} from '../../interfaces';
import {searchFilms} from '../actions/async/searchFilms';

const initialState: FilmListState = {
  items: [],
  loading: false,
  error: null,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    emptyList: state => {
      state.items = [];
    },
  },
  extraReducers: builder => {
    builder.addCase(searchFilms.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const {emptyList} = searchSlice.actions;
export default searchSlice.reducer;
