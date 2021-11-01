import {createAsyncThunk} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {FilmModel} from '../../../interfaces/interfaces';
import {filmApi} from '../../../services/network';

export const fetchTrending = createAsyncThunk<Array<FilmModel>, string[]>(
  'trending/fetchTrending',
  async (orderBy, thunkApi) => {
    try {
      const {results} = await filmApi.fetchTrending(orderBy);

      return results.map(item => ({
        id: item.id,
        imageUrl: item.poster_path,
        name: item.title || item.name,
        description: item.overview,
      }));
    } catch (error) {
      console.log('Fetch trending error: ', error);
      return thunkApi.rejectWithValue(
        Alert.alert(
          'Sorry, there was an error. We cannot show a list of trends.',
          error as string,
          [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        ),
      );
    }
  },
);
