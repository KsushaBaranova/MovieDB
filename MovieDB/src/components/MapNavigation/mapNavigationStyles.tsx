import {Dimensions, StyleSheet} from 'react-native';

const screenWidth = Dimensions.get('screen').width;

export const mapNavigationStyles = StyleSheet.create({
  viewContainer: {
    flexDirection: 'column-reverse',
    width: '95%',
    flex: 1,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.3)',
    overflow: 'hidden',
    margin: 10,
    borderColor: 'teal',
    borderWidth: 2,
  },
  mapViewContainer: {
    flex: 1,
  },
  markerCalloutView: {
    backgroundColor: 'rgba(249,131,137,0.98)',
    width: 0.8 * screenWidth,
    overflow: 'scroll',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  markerTitle: {
    color: 'rgb(165,209,241)',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  markerText: {
    color: 'rgb(255,255,255)',
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
    justifyContent: 'center',
  },
  openTextStyle: {
    fontSize: 16,
    justifyContent: 'center',
    color: 'green',
    fontWeight: 'bold',
  },
  closedTextStyle: {
    fontSize: 16,
    justifyContent: 'center',
    color: 'red',
    fontWeight: 'bold',
  },
  warningText: {
    color: 'rgb(200,30,50)',
    marginBottom: 5,
    textAlign: 'center',
  },
  markerFieldDescriptor: {
    color: 'rgb(165,209,241)',
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
  },
  markerInfo: {
    fontSize: 11,
    marginBottom: 5,
    textAlign: 'center',
    color: 'grey',
  },
});
