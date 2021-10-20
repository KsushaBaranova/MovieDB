import {Dimensions, StyleSheet} from 'react-native';

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  textInputStyle: {
    backgroundColor: 'white',
    height: windowHeight < 900 ? 40 : 45,
    width: '90%',
    paddingLeft: 25,
    borderRadius: 20,
    fontSize: windowHeight < 900 ? 14 : 16,
  },
});

export default styles;
