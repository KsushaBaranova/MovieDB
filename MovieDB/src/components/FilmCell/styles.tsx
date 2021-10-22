import {StyleSheet} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../helper/normalize';

const styles = StyleSheet.create({
  viewContainerStyle: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
    height: SCREEN_HEIGHT * 0.2,
    borderWidth: 4,
    borderColor: 'rgba(203,178,184,0.6)',
  },
  imageStyle: {
    height: SCREEN_HEIGHT * 0.16,
    width: SCREEN_WIDTH * 0.3,
  },
  viewImageStyle: {
    width: '30%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  viewDescriptionStyle: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default styles;
