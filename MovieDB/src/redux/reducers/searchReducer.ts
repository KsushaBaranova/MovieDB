import {createSlice} from '@reduxjs/toolkit';
import {FilmListState} from '../../interfaces/interfaces';
import {searchFilms} from '../actions/async/searchFilms';

const initialState: FilmListState = {
  item: [],
  loading: false,
  error: undefined,
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
    builder.addCase(searchFilms.rejected, (state, {error}) => {
      state.error = error.message;
    });
  },
});

export const {emptyList} = searchSlice.actions;
export default searchSlice.reducer;
