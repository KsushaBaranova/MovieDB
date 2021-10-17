import {createAsyncThunk} from '@reduxjs/toolkit';
import {FilmModel} from '../../../interfaces';
import {searchApi} from '../../../services/apiFilm';

export const searchFilms = createAsyncThunk<Array<FilmModel>, string>(
  'films/searchFilms',
  async (inputValue, thunkApi) => {
    const query = {query: inputValue};

    try {
      const {results} = await searchApi.searchFilms(query);

      return results.map(item => ({
        id: item.id,
        imageUrl: item.poster_path,
        name: item.title,
        description: item.overview,
      }));
    } catch (error) {
      console.log('searchFilms error: ', error);
      return thunkApi.rejectWithValue(error);
    }
  },
);
