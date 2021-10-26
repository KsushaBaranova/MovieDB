import React from 'react';
import {Animated, FlatList, Platform} from 'react-native';
import {ExpandingDot} from 'react-native-animated-pagination-dots';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import {styles} from '../components/WelcomeScreenRenderItem/styles';
import renderItem from '../components/WelcomeScreenRenderItem/WelcomeScreenRenderItem';
import {useAppSelector, useAppDispatch} from '../hooks/hooks';
import {WelcomeScreenProps} from '../navigation/AppScreen';
import {createSession} from '../redux/actions/async/createSession';
import {createSessionToken} from '../redux/actions/async/createSessionToken';
import {fetchAccount} from '../redux/actions/async/fetchAccount';

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

const WelcomeScreen = ({navigation}: WelcomeScreenProps) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const sessionInitiated = useAppSelector(
    state => state.bookmarks.sessionInitiated,
  );
  const dispatch = useAppDispatch();

  const initiateSession = () => {
    !sessionInitiated
      ? dispatch(createSessionToken())
          .then(response =>
            tokenConfirmationRequest(response.payload as string),
          )
          .then(response => dispatch(createSession(response)))
          .then(response => {
            dispatch(fetchAccount(response.payload as string));
          })
          .then(() => {
            navigation.reset({routes: [{name: 'MainScreen'}]});
          })
      : null;
  };

  const redirect = () => {
    navigation.reset({routes: [{name: 'MainScreen'}]});
  };

  return (
    <>
      <FlatList
        keyExtractor={(_, index) => String(index)}
        style={styles.flatListStyle}
        data={data}
        renderItem={item => renderItem(item, initiateSession, redirect)}
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
        scrollEventThrottle={16}
      />
      <ExpandingDot
        data={data}
        expandingDotWidth={30}
        scrollX={scrollX}
        inActiveDotOpacity={0.6}
        dotStyle={styles.dots}
        containerStyle={styles.dotContainer}
      />
    </>
  );
};

export default WelcomeScreen;

const data = [
  {
    message: 'Welcome to MovieDB!',
    info: 'There are few things you need to know before we start.',
    image: require('../../image/logo.png'),
  },
  {
    message: 'Do you have The Movie DB account?',
    info: 'Sign in to your account, and we will load all your bookmarks data.',
    image: require('../../image/account.png'),
  },
];
