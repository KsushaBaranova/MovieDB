import {PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

export let permissionAndroid = false;
export let permissionIos = false;

export const requestAndroidLocation = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Movie DB location Permission',
        message:
          'Movie DB App needs access to your location ' +
          'to use this feature.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Access to location permited');
      permissionAndroid = true;
    } else {
      console.log('Location access denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

export const requestIOSLocation = async () => {
  Geolocation.requestAuthorization('whenInUse')
    .then(status => {
      console.log(status);
      status === 'granted' ? (permissionIos = true) : null;
    })
    .catch(err => console.log(err));
};
