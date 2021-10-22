import {createSlice} from '@reduxjs/toolkit';
import {FilmListState} from '../../interfaces/interfaces';
import {searchFilms} from '../actions/async/searchFilms';

const initialState: FilmListState = {
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
