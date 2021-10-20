import {Dimensions, StyleSheet} from 'react-native';

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  viewDropdownStyle: {
    zIndex: 1000,
    width: windowHeight < 900 ? '30%' : '35%',
  },
  dropdownStyle: {
    height: windowHeight < 900 ? 35 : 40,
    borderWidth: 2,
    borderColor: 'rgba(203,178,184,0.6)',
  },
  dropdownTextStyle: {
    fontSize: windowHeight < 900 ? 14 : 15,
  },
});

export default styles;
