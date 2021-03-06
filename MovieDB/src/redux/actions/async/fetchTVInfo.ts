import {createAsyncThunk} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {InfoFilmModel, VideoResponse} from '../../../interfaces/interfaces';
import {accountStateApi, infoTVApi} from '../../../services/network';

export const fetchTVInfo = createAsyncThunk<InfoFilmModel, string[]>(
  'info/fetchTVInfo',
  async (filmId, thunkApi) => {
    try {
      let append = {
        append_to_response: 'videos',
      };

      let account_state;
      if (filmId[1]) {
        account_state = await accountStateApi.fetchAccountStateTV(
          filmId,
          filmId[1],
        );
      }

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
        number_of_episodes: response.number_of_episodes,
        number_of_seasons: response.number_of_seasons,
        account_state: account_state,
      };
    } catch (error) {
      console.log('Fetch TV Info error: ', error);
      return thunkApi.rejectWithValue(
        Alert.alert(
          'Sorry, TV show full information is unavailable at the moment.',
          error as string,
          [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        ),
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
