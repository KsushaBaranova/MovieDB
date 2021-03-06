import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {FilmInfoState, InfoFilmModel} from '../../interfaces/interfaces';
import {fetchFilmInfo} from '../actions/async/fetchFilmInfo';
import {fetchTVInfo} from '../actions/async/fetchTVInfo';

function Item(): InfoFilmModel {
  return {
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
  };
}

const initialState: FilmInfoState = {
  itemTrend: Item(),
  itemSearch: Item(),
  itemSimilar: Item(),
  itemBookmarks: Item(),
  fromScreen: '',
  loading: false,
  error: undefined,
};

export const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {
    setScreen: {
      reducer: (state, action: PayloadAction<string>) => {
        state.fromScreen = action.payload;
      },
      prepare: (text?: string) => {
        return {payload: text || ''};
      },
    },
    updateFavoriteState(state, action) {
      switch (state.fromScreen) {
        case 'trend':
          state.itemTrend.account_state!.favorite = action.payload;
          break;
        case 'search':
          state.itemSearch.account_state!.favorite = action.payload;
          break;
        case 'similar':
          state.itemSimilar.account_state!.favorite = action.payload;
          break;
        case 'bookmarks':
          state.itemBookmarks.account_state!.favorite = action.payload;
          break;
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchFilmInfo.fulfilled, (state, action) => {
      switch (state.fromScreen) {
        case 'trend':
          state.itemTrend = action.payload;
          break;
        case 'search':
          state.itemSearch = action.payload;
          break;
        case 'similar':
          state.itemSimilar = action.payload;
          break;
        case 'bookmarks':
          state.itemBookmarks = action.payload;
          break;
      }
    });
    builder.addCase(fetchTVInfo.fulfilled, (state, action) => {
      switch (state.fromScreen) {
        case 'trend':
          state.itemTrend = action.payload;
          break;
        case 'search':
          state.itemSearch = action.payload;
          break;
        case 'similar':
          state.itemSimilar = action.payload;
          break;
        case 'bookmarks':
          state.itemBookmarks = action.payload;
          break;
      }
    });
  },
});

export const {setScreen, updateFavoriteState} = infoSlice.actions;
export default infoSlice.reducer;
