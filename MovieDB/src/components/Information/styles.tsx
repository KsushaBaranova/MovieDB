import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  viewRatingAndRealeseStyle: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  viewTitleAndYearStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewRatingStyle: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconStyle: {
    height: 30,
    width: 30,
  },
  textStyle: {
    textAlign: 'justify',
    fontSize: 16,
    lineHeight: 18,
    color: 'rgb(58,77,95)',
  },
  textTitleStyle: {
    textAlign: 'justify',
    fontSize: 18,
    fontWeight: '600',
    color: 'rgb(58,77,95)',
  },
  textYearStyle: {
    textAlign: 'justify',
    fontSize: 18,
    color: 'rgb(58,77,95)',
  },
  viewInfoStyle: {
    paddingHorizontal: 15,
  },
  viewGenresAndContriesStyle: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginBottom: 15,
  },
  textOverviewStyle: {
    textAlign: 'justify',
    fontSize: 18,
    fontWeight: '600',
    color: 'rgb(58,77,95)',
    marginBottom: 5,
  },
  textRatingStyle: {
    textAlign: 'justify',
    fontSize: 17,
    color: 'rgb(58,77,95)',
  },
});

export default styles;
