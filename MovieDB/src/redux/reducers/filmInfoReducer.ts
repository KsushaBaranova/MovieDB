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
    account_state: {
      id: 0,
      favorite: false,
      rated: {
        value: 0,
      },
      watchlist: false,
    },
  },
  loading: false,
  error: undefined,
};

export const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {
    updateFavoriteState(state, action) {
      state.item.account_state!.favorite = action.payload;
    },
  },
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

export const {updateFavoriteState} = infoSlice.actions;
export default infoSlice.reducer;
