import {StyleSheet} from 'react-native';
import {fontNormalize} from '../../helper/normalize';

const styles = StyleSheet.create({
  viewContainerStyle: {
    paddingHorizontal: 15,
  },
  textNameStyle: {
    fontSize: fontNormalize(13),
    fontWeight: '700',
    color: 'black',
    textAlign: 'center',
  },
  textDescriptionStyle: {
    fontSize: fontNormalize(12),
    textAlign: 'justify',
    fontWeight: '500',
    lineHeight: 18,
    color: 'rgb(58,77,95)',
  },
  viewTitleStyle: {
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});

export default styles;
