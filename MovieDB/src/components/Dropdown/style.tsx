import {StyleSheet} from 'react-native';
import {
  fontNormalize,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../../helper/normalize';

const styles = StyleSheet.create({
  viewDropdownStyle: {
    zIndex: 1000,
    width: SCREEN_WIDTH * 0.35,
  },
  dropdownStyle: {
    height: SCREEN_HEIGHT * 0.045,
    borderWidth: 2,
    borderColor: 'rgba(203,178,184,0.6)',
  },
  dropdownTextStyle: {
    fontSize: fontNormalize(12),
  },
});

export default styles;
