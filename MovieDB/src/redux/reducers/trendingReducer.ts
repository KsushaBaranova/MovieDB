import {createSlice} from '@reduxjs/toolkit';
import {FilmListState} from '../../interfaces';
import {fetchTrending} from '../actions/async/fetchTrending';

const initialState: FilmListState = {
  item: [],
  loading: false,
  error: null,
};

export const trendingSlice = createSlice({
  name: 'trending',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchTrending.fulfilled, (state, action) => {
      state.item = action.payload;
    });
  },
});

export default trendingSlice.reducer;
