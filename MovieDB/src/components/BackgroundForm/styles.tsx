import {Dimensions, StyleSheet} from 'react-native';

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  backgroundImageStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  viewTextStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 30,
  },
  textStyle: {
    color: 'white',
    fontSize: windowHeight < 900 ? 20 : 22,
    fontWeight: 'bold',
  },
  viewStyle: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 10,
  },
});

export default styles;
