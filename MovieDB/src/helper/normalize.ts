import {Dimensions, Platform, PixelRatio} from 'react-native';

export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('window');

const SCALE_FOR_FONT = SCREEN_WIDTH / 320;
const SCALE_FOR_NUMBER_LINES = 0.006;

export function fontNormalize(size: number) {
  const newSize = size * SCALE_FOR_FONT;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

export const numberLinesNormalize = () => {
  return SCREEN_HEIGHT * SCALE_FOR_NUMBER_LINES;
};
