import {createAsyncThunk} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {FilmModel} from '../../../interfaces';
import {accountApi, bookmarksApi} from '../../../services/apiFilm';

export const fetchBookmarks = createAsyncThunk<Array<FilmModel>, string>(
  'bookmarks/fetchBookmarks',
  async (session_id, thunkApi) => {
    try {
      const accountId = await accountApi.fetchAccount(session_id);

      const bookmarks = await bookmarksApi.fetchBookmarks(
        session_id,
        accountId.id,
      );
      if (!bookmarks.results) {
        throw bookmarks;
      }
      return bookmarks.results.map(item => ({
        id: item.id,
        imageUrl: item.poster_path,
        name: item.title || item.name,
        description: item.overview,
      }));
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
