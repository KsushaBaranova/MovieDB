import {createSlice} from '@reduxjs/toolkit';
import {FilmListState} from '../../interfaces/interfaces';
import {fetchTrending} from '../actions/async/fetchTrending';

const initialState: FilmListState = {
  item: [],
  loading: false,
  error: undefined,
};

export const trendingSlice = createSlice({
  name: 'trending',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchTrending.fulfilled, (state, action) => {
      state.item = action.payload;
    });
    builder.addCase(fetchTrending.rejected, (state, {error}) => {
      state.error = error.message;
    });
  },
});

export default trendingSlice.reducer;
