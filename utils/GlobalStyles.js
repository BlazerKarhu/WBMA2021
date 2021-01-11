import {StyleSheet, Platform, StatusBar} from 'react-native';
export default StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    backgroundColor: '#fff',
    marginBottom: 5,
    borderRadius: 6,
    padding: 15,
    flexDirection: 'row',
  },
  card: {
    flex: 2,
    backgroundColor: '#d1d1d1',
    alignContent: 'center',
    flexWrap: 'wrap',
    padding: 20,
  },
  imagebox: {
    flex: 1,
    alignContent: 'center',
    width: '100%',
    height: '100%',
  },
  image: {
    flex: 1,
    borderRadius: 6,
  },
  textbox: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});
