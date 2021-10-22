import {createAsyncThunk} from '@reduxjs/toolkit';
import {Alert, Platform} from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import {RequestSessionResponse} from '../../../interfaces/interfaces';
import {requestSessionIdApi, requestTokenApi} from '../../../services/network';

export const createSession = createAsyncThunk<string>(
  'bookmarks/createSession',
  async (_, thunkApi) => {
    try {
      const {success, request_token} =
        await requestTokenApi.createRequestToken();
      if (!success) {
        throw 'Error while requesting session token';
      }

      Platform.OS === 'ios'
        ? await InAppBrowser.openAuth(
            `https://www.themoviedb.org/authenticate/${request_token}`,
            '',
          )
        : await InAppBrowser.open(
            `https://www.themoviedb.org/authenticate/${request_token}`,
          );

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
        Alert.alert('Unfortunately, something went wrong:', error as string, [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]),
      );
    }
  },
);
