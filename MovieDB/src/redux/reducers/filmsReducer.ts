import {createSlice} from '@reduxjs/toolkit';
import {FilmsState} from '../../interfaces';
import {fetchTrendingDefault} from '../actions/async/fetchTrendingDefault';
import {searchFilms} from '../actions/async/searchFilms';

const initialState: FilmsState = {
  trending: [],
  search: [],
  loading: false,
  error: null,
};

export const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    emptyList: state => {
      state.search = [];
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchTrendingDefault.fulfilled, (state, action) => {
      state.trending = action.payload;
    });
    builder.addCase(searchFilms.fulfilled, (state, action) => {
      state.search = action.payload;
    });
  },
});

export const {emptyList} = filmsSlice.actions;
export default filmsSlice.reducer;
