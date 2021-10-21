import {createSlice} from '@reduxjs/toolkit';
import {FilmInfoState} from '../../interfaces';
import {fetchFilmInfo} from '../actions/async/fetchFilmInfo';
import {fetchTVInfo} from '../actions/async/fetchTVInfo';

const initialState: FilmInfoState = {
  movie: {
    id: '',
    imageUrl: '',
    name: '',
    description: '',
    genres: [''],
    dateRealese: '',
    rating: 0,
    videos: {name: '', key: ''},
  },
  tv: {
    id: '',
    imageUrl: '',
    name: '',
    description: '',
    genres: [''],
    dateRealese: '',
    rating: 0,
    numberOfEpisodes: 0,
    numberOfSeasons: 0,
    country: [],
    videos: {name: '', key: ''},
  },
  loading: false,
  error: null,
};

export const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchFilmInfo.fulfilled, (state, action) => {
      state.movie = action.payload;
    });
    builder.addCase(fetchTVInfo.fulfilled, (state, action) => {
      state.tv = action.payload;
    });
  },
});

export default infoSlice.reducer;
