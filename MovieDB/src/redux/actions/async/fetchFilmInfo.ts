import {createAsyncThunk} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {InfoFilmModel, VideoResponse} from '../../../interfaces/interfaces';
import {infoFilmApi} from '../../../services/network';

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
        name: response.title,
        description: response.overview,
        genres: response.genres.map(item => item.name),
        dateRealese: response.release_date.slice(0, 4),
        rating: response.vote_average,
        country: response.production_countries.map(item => item.name),
        videos: findTrailer(response.videos),
      };
    } catch (error) {
      console.log('fetchFilmInfo error: ', error);
      return thunkApi.rejectWithValue(
        Alert.alert('Sorry, we can`е show full information.', error as string, [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]),
      );
    }
  },
);

const findTrailer = (videos: VideoResponse) => {
  let trailers = videos.results.filter(
    item => item.type.includes('Trailer') || item.type.includes('Teaser'),
  );
  return trailers[0];
};
