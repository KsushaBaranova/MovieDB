import {createAsyncThunk} from '@reduxjs/toolkit';
import {FilmModel} from '../../../interfaces';
import {filmApi} from '../../../services/apiFilm';

export const fetchTrendingDefault = createAsyncThunk<
  Array<FilmModel>,
  string[]
>('films/fetchTrendingDefault', async (orderBy, thunkApi) => {
  try {
    const {results} = await filmApi.fetchTrendingDefault(orderBy);

    return results.map(item => ({
      id: item.id,
      imageUrl: item.poster_path,
      name: item.title || item.name,
      description: item.overview,
    }));
  } catch (error) {
    console.log('fetchTrending error: ', error);
    return thunkApi.rejectWithValue(error);
  }
});
