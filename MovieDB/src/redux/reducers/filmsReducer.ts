import {createSlice} from '@reduxjs/toolkit';
import {FilmsState} from '../../interfaces';
import {fetchTrendingDefault} from '../actions/async/fetchTrendingDefault';
import {searchFilms} from '../actions/async/searchFilms';

const initialState: FilmsState = {items: [], loading: false, error: null};

export const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    emptyList: state => {
      state.items = [];
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchTrendingDefault.fulfilled, (state, action) => {
      state.items = action.payload;
    });
    builder.addCase(searchFilms.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const {emptyList} = filmsSlice.actions;
export default filmsSlice.reducer;
