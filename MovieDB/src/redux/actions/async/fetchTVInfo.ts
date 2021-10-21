import {createAsyncThunk} from '@reduxjs/toolkit';
import {InfoTVModel} from '../../../interfaces';
import {infoTVApi} from '../../../services/apiFilm';

export const fetchTVInfo = createAsyncThunk<InfoTVModel, string[]>(
  'info/fetchTVInfo',
  async (filmId, thunkApi) => {
    try {
      let append = {
        append_to_response: 'videos',
      };
      const response = await infoTVApi.fetchTVInfo(filmId, append);
      console.log(response.videos);

      return {
        id: response.id,
        imageUrl: response.poster_path,
        name: response.name,
        description: response.overview,
        genres: response.genres.map(item => item.name),
        dateRealese: response.first_air_date.slice(0, 4),
        rating: response.vote_average,
        numberOfEpisodes: response.number_of_episodes,
        numberOfSeasons: response.number_of_seasons,
        country: response.production_countries.map(item => item.name),
        videos: response.videos.results[0],
      };
    } catch (error) {
      console.log('Fetch TV Info error: ', error);
      return thunkApi.rejectWithValue(error);
    }
  },
);
