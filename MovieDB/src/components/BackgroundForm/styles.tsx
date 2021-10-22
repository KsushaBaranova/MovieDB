import {StyleSheet} from 'react-native';
import {fontNormalize} from '../../helper/normalize';

const styles = StyleSheet.create({
  backgroundImageStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  viewTextStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 20,
  },
  textStyle: {
    color: 'white',
    fontSize: fontNormalize(16),
    fontWeight: 'bold',
  },
  viewStyle: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 10,
  },
});

export default styles;
