import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  viewRatingAndRealeseStyle: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  viewYearAndContryStyle: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textDescriptionStyle: {
    textAlign: 'justify',
    fontSize: 16,
    lineHeight: 18,
    color: 'rgb(58,77,95)',
  },
  textTitleStyle: {
    textAlign: 'justify',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 18,
    color: 'rgb(58,77,95)',
    marginBottom: 5,
  },
  viewInfoStyle: {
    paddingHorizontal: 15,
  },
  textGenreStyle: {
    textAlign: 'left',
    fontSize: 16,
    lineHeight: 18,
    color: 'rgb(58,77,95)',
  },
  viewGenresStyle: {
    marginBottom: 10,
    flexWrap: 'nowrap',
    flexDirection: 'row',
  },
  viewNumbersStyle: {
    flexWrap: 'nowrap',
    flexDirection: 'row',
    marginBottom: 10,
  },
});

export default styles;
