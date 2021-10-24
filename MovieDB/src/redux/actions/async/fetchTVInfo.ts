import {createAsyncThunk} from '@reduxjs/toolkit';
import {InfoFilmModel, VideoResponse} from '../../../interfaces/interfaces';
import {infoTVApi} from '../../../services/network';

export const fetchTVInfo = createAsyncThunk<InfoFilmModel, string[]>(
  'info/fetchTVInfo',
  async (filmId, thunkApi) => {
    try {
      let append = {
        append_to_response: 'videos',
      };
      const response = await infoTVApi.fetchTVInfo(filmId, append);

      return {
        id: response.id,
        name: response.name,
        description: response.overview,
        genres: response.genres.map(item => item.name),
        dateRealese: response.first_air_date.slice(0, 4),
        rating: response.vote_average,
        country: response.production_countries.map(item => item.name),
        videos: findTrailer(response.videos),
      };
    } catch (error) {
      console.log('Fetch TV Info error: ', error);
      return thunkApi.rejectWithValue(error);
    }
  },
);

const findTrailer = (videos: VideoResponse) => {
  let trailers = videos.results.filter(
    item => item.type.includes('Trailer') || item.type.includes('Teaser'),
  );
  return trailers[0];
};
