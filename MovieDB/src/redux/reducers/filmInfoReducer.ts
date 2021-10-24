import {createSlice} from '@reduxjs/toolkit';
import {FilmInfoState} from '../../interfaces/interfaces';
import {fetchFilmInfo} from '../actions/async/fetchFilmInfo';
import {fetchTVInfo} from '../actions/async/fetchTVInfo';

const initialState: FilmInfoState = {
  item: {
    id: '',
    name: '',
    description: '',
    genres: [''],
    dateRealese: '',
    country: [],
    rating: 0,
    videos: {name: '', key: ''},
  },
  loading: false,
  error: undefined,
};

export const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchFilmInfo.fulfilled, (state, action) => {
      state.item = action.payload;
    });
    builder.addCase(fetchFilmInfo.rejected, (state, {error}) => {
      state.error = error.message;
    });
    builder.addCase(fetchTVInfo.fulfilled, (state, action) => {
      state.item = action.payload;
    });
    builder.addCase(fetchTVInfo.rejected, (state, {error}) => {
      state.error = error.message;
    });
  },
});

export default infoSlice.reducer;
