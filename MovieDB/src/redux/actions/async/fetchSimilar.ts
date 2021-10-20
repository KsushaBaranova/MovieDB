import {createAsyncThunk} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {FilmModel} from '../../../interfaces';
import {similarMovieshApi} from '../../../services/apiFilm';

export const fetchSimilarMovies = createAsyncThunk<Array<FilmModel>, string>(
  'similar/fetchSimilarMovies',
  async (inputValue, thunkApi) => {
    const id = inputValue;

    try {
      const {results} = await similarMovieshApi.fetchSimilar(id);

      return results.map(item => ({
        id: item.id,
        imageUrl: item.poster_path,
        name: item.title,
        description: item.overview,
      }));
    } catch (error) {
      console.log('Similar movies error: ', error);
      return thunkApi.rejectWithValue(
        Alert.alert(
          'Sorry, seems like we can`t get similar movies.',
          error as string,
          [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        ),
      );
    }
  },
);
