import {createAsyncThunk} from '@reduxjs/toolkit';
import {InfoFilmModel} from '../../../interfaces';
import {infoFilmApi} from '../../../services/apiFilm';

export const fetchFilmInfo = createAsyncThunk<InfoFilmModel, string[]>(
  'info/fetchFilmInfo',
  async (filmId, thunkApi) => {
    try {
      let append = {
        append_to_response: 'videos',
      };
      const response = await infoFilmApi.fetchFilmInfo(filmId, append);

      return {
        id: response.id,
        imageUrl: response.poster_path,
        name: response.title,
        description: response.overview,
        genres: response.genres.map(item => item.name),
        dateRealese: response.release_date.slice(0, 4),
        rating: response.vote_average,
        videos: response.videos.results[0],
      };
    } catch (error) {
      console.log('fetchFilmInfo error: ', error);
      return thunkApi.rejectWithValue(error);
    }
  },
);
