import {StyleSheet} from 'react-native';
import {fontNormalize, SCREEN_HEIGHT} from '../../helper/normalize';

const styles = StyleSheet.create({
  textInputStyle: {
    backgroundColor: 'white',
    height: SCREEN_HEIGHT * 0.05,
    width: '90%',
    paddingLeft: 25,
    borderRadius: 20,
    fontSize: fontNormalize(12),
  },
});

export default styles;
