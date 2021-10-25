import {createAsyncThunk} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {UserAccount} from '../../../interfaces/interfaces';
import {accountApi} from '../../../services/network';

export const fetchAccount = createAsyncThunk<UserAccount, string>(
  'bookmarks/fetchAccount',
  async (session_id, thunkApi) => {
    try {
      const accountId = await accountApi.fetchAccount(session_id);

      return accountId;
    } catch (error) {
      console.log('Fetching account error: ', error);
      return thunkApi.rejectWithValue(
        Alert.alert(
          'Sorry, seems like we can`t get your account id.',
          error as string,
          [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        ),
      );
    }
  },
);
