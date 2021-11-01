import {createAsyncThunk} from '@reduxjs/toolkit';
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
      return thunkApi.rejectWithValue(error);
    }
  },
);
