import {createSlice} from '@reduxjs/toolkit';
import {BookmarksState} from '../../interfaces/interfaces';
import {createSession} from '../actions/async/createSession';
import {fetchBookmarks} from '../actions/async/fetchBookmarks';

const initialState: BookmarksState = {
  items: [],
  sessionInitiated: false,
  error: null,
  session_id: '',
};

export const bookmarksSlice = createSlice({
  name: 'bookmarks',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(createSession.fulfilled, (state, action) => {
      state.session_id = action.payload;
      state.sessionInitiated = true;
    });
    builder.addCase(fetchBookmarks.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export default bookmarksSlice.reducer;
