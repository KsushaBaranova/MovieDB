import {createAsyncThunk} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {requestTokenApi} from '../../../services/network';

export const createSessionToken = createAsyncThunk<string>(
  'bookmarks/requestToken',
  async (_, thunkApi) => {
    try {
      const {success, request_token} =
        await requestTokenApi.createRequestToken();
      if (!success) {
        throw 'Error while requesting session token';
      }

      return request_token;
    } catch (error) {
      console.log('Create token error: ', error);

      return thunkApi.rejectWithValue(
        Alert.alert(
          'Unfortunately, we weren`t able to fetch session token:',
          error as string,
          [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        ),
      );
    }
  },
);
