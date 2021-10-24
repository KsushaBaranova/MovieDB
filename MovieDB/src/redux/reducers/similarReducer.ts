import {createSlice} from '@reduxjs/toolkit';
import {SimilarListState} from '../../interfaces/interfaces';
import {fetchSimilarMovies} from '../actions/async/fetchSimilar';

const initialState: SimilarListState = {items: [], loading: false, error: null};

export const similarFilmsSlice = createSlice({
  name: 'similar',
  initialState,
  reducers: {
    emptyList: state => {
      state.items = [];
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchSimilarMovies.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const {emptyList} = similarFilmsSlice.actions;
export default similarFilmsSlice.reducer;
