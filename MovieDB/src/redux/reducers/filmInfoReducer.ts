import {createSlice} from '@reduxjs/toolkit';
import {FilmInfoState} from '../../interfaces';
import {fetchFilmInfo} from '../actions/async/fetchFilmInfo';

const initialState: FilmInfoState = {
  item: {
    id: '',
    imageUrl: '',
    name: '',
    description: '',
    genres: [''],
    dateRealese: '',
    rating: 0,
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
      state.item = action.payload;
    });
  },
});

export default infoSlice.reducer;
