import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  viewContainerStyle: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    height: 160,
  },
  imageStyle: {
    height: 120,
    width: 120,
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
