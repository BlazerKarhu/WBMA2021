import {StyleSheet, Platform, StatusBar} from 'react-native';
export default StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    backgroundColor: 'grey',
    borderColor: 'black',
    borderWidth: 2,
    marginBottom: 5,
    marginHorizontal: 5,
    borderRadius: 7,
    padding: 15,
    elevation: 12,
  },
  header: {
    height: 150,
    marginBottom: 5,
  },
  menu: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  setting: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  card: {
    flex: 2,
    backgroundColor: 'gray',
    flexDirection: 'row',
  },
  imagebox: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 10,
  },
  image: {
    flex: 1,
    borderRadius: 20,
    resizeMode: 'contain',
  },
  bgimage: {
    width: '100%',
    height: '100%',
  },
  hello: {
    padding: 5,
    position: 'absolute',
    color: 'white',
    textShadowRadius: 10,
    textShadowColor: 'black',
    left: 20,
    bottom: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  textbox: {
    flex: 1,
    paddingLeft: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'black',
    padding: 5,
  },
  footer: {
    height: 50,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
});
