import {createAsyncThunk} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {RequestSessionResponse} from '../../../interfaces/interfaces';
import {requestSessionIdApi} from '../../../services/network';

export const createSession = createAsyncThunk<string, string>(
  'bookmarks/createSession',
  async (request_token, thunkApi) => {
    try {
      const response: RequestSessionResponse =
        await requestSessionIdApi.createSession(request_token);
      const status = response.success;
      const session_id = response.session_id;
      if (!status) {
        throw 'Error while requesting session id';
      }
      return session_id;
    } catch (error) {
      console.log('Create session error: ', error);

      return thunkApi.rejectWithValue(
        Alert.alert('Sorry, we have authorization issue.', error as string, [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]),
      );
    }
  },
);
