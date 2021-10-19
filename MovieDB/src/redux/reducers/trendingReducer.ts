import {createSlice} from '@reduxjs/toolkit';
import {TrendingState} from '../../interfaces';
import {fetchTrending} from '../actions/async/fetchTrending';

const initialState: TrendingState = {
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
