import {createAsyncThunk} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {FilmModel} from '../../../interfaces/interfaces';
import {bookmarksApi} from '../../../services/network';

export const fetchBookmarks = createAsyncThunk<Array<FilmModel>, string[]>(
  'bookmarks/fetchBookmarks',
  async ([session_id, account_id], thunkApi) => {
    try {
      const bookmarksMovie = await bookmarksApi.fetchBookmarks(
        session_id,
        account_id,
      );
      if (!bookmarksMovie.results) {
        throw bookmarksMovie;
      }
      const bookmarksTV = await bookmarksApi.fetchBookmarksTV(
        session_id,
        account_id,
      );
      if (!bookmarksTV.results) {
        throw bookmarksTV;
      }

      const bookmarksMovieMapped = bookmarksMovie.results.map(item => ({
        id: item.id,
        imageUrl: item.poster_path,
        name: item.title || item.name,
        description: item.overview,
        mediaType: 'movie',
      }));
      const bookmarksTVMapped = bookmarksTV.results.map(item => ({
        id: item.id,
        imageUrl: item.poster_path,
        name: item.title || item.name,
        description: item.overview,
        mediaType: 'tv',
      }));

      return [...bookmarksMovieMapped, ...bookmarksTVMapped];
    } catch (error) {
      console.log('Fetching bookmarks error: ', error);
      return thunkApi.rejectWithValue(
        Alert.alert(
          'Sorry, seems like we can`t get your bookmarks.',
          error as string,
          [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        ),
      );
    }
  },
);
