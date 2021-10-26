import {Platform} from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks';
import {createSession} from '../../redux/actions/async/createSession';
import {createSessionToken} from '../../redux/actions/async/createSessionToken';
import {fetchAccount} from '../../redux/actions/async/fetchAccount';

const tokenConfirmationRequest = async (token: string) => {
  Platform.OS === 'ios'
    ? await InAppBrowser.openAuth(
        `https://www.themoviedb.org/authenticate/${token}`,
        '',
      )
    : await InAppBrowser.open(
        `https://www.themoviedb.org/authenticate/${token}`,
      );
  return token;
};

export default InitiateSesssion;
