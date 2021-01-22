import React, {useContext} from 'react';
import {StyleSheet, SafeAreaView, Text, Button} from 'react-native';
import PropTypes from 'prop-types';
import {MainContext} from '../contexts/MainContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({navigation}) => {
  const {isLoggedIn, setIsLoggedIn, user} = useContext(MainContext);
  console.log('profile is logged in?', isLoggedIn);
  console.log('profile user data', user);
  const logout = async () => {
    setIsLoggedIn(false);
    await AsyncStorage.clear();
    navigation.navigate('Login');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Profile</Text>
      <Text style={styles.text}>Name: {user.username}</Text>
      <Text style={styles.text}>Email: {user.email}</Text>
      <Button style={styles.button} title={'logout'} onPress={logout}></Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    margin: 2,
    fontSize: 20,
  },
  button: {
    padding: 10,
    margin: 20,
    position: 'relative',
  },
});
Profile.propTypes = {
  navigation: PropTypes.object,
};
export default Profile;
