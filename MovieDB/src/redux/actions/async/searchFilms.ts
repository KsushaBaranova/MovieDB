import {createAsyncThunk} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {FilmModel} from '../../../interfaces/interfaces';
import {searchApi} from '../../../services/network';

export const searchFilms = createAsyncThunk<Array<FilmModel>, string>(
  'search/searchFilms',
  async (inputValue, thunkApi) => {
    const query = {query: inputValue};

    try {
      const {results} = await searchApi.searchFilms(query);

      return results.map(item => ({
        id: item.id,
        imageUrl: item.poster_path,
        name: item.title || item.name,
        description: item.overview,
      }));
    } catch (error) {
      console.log('Search films error: ', error);
      return thunkApi.rejectWithValue(
        Alert.alert(
          'Sorry, there was an error. You cannot use search.',
          error as string,
          [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        ),
      );
    }
  },
);
