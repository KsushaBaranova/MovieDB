import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  viewRatingAndRealeseStyle: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textDescriptionStyle: {
    textAlign: 'justify',
    fontSize: 16,
  },
  textTitleStyle: {
    textAlign: 'justify',
    fontSize: 16,
    fontWeight: '600',
  },
  viewInfoStyle: {
    flex: 1,
    paddingHorizontal: 15,
  },
  textGenreStyle: {
    textAlign: 'left',
    fontSize: 16,
  },
  viewGenresStyle: {
    marginTop: 10,
    marginBottom: 10,
  },
});

export default styles;
