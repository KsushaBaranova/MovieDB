import {createAsyncThunk} from '@reduxjs/toolkit';
import {InfoFilmModel} from '../../../interfaces';
import {infoApi} from '../../../services/apiFilm';

export const fetchFilmInfo = createAsyncThunk<InfoFilmModel, string[]>(
  'films/fetchFilmInfo',
  async (filmId, thunkApi) => {
    try {
      const response = await infoApi.fetchFilmInfo(filmId);

      return {
        id: response.id,
        imageUrl: response.poster_path,
        name: response.title,
        description: response.overview,
        genres: response.genres.map(item => item.name),
        dateRealese: response.release_date,
        rating: response.vote_average,
      };
    } catch (error) {
      console.log('fetchFilmInfo error: ', error);
      return thunkApi.rejectWithValue(error);
    }
  },
);
