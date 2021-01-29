import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {Text, Button, Card} from 'react-native-elements';
import PropTypes from 'prop-types';
import {MainContext} from '../contexts/MainContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {uploadsUrl} from '../utils/variables';
import {useTag} from '../hooks/ApiHooks';

const Profile = ({navigation}) => {
  const {isLoggedIn, setIsLoggedIn, user} = useContext(MainContext);
  const [avatar, setAvatar] = useState('http://placekitten.com/620');
  const {getFilesByTag} = useTag();
  console.log('profile is logged in?', isLoggedIn);
  console.log('profile user data', user);
  const logout = async () => {
    setIsLoggedIn(false);
    await AsyncStorage.clear();
    navigation.navigate('Login');
  };

  useEffect(() => {
    const fetchAvatar = async () => {
      try {
        const avatarList = await getFilesByTag('avatar_' + user.user_id);
        if (avatarList.lenght > 0) {
          setAvatar(uploadsUrl + avatarList.pop().filename);
        }
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchAvatar();
  }, []);

  return (
    <SafeAreaView>
      <Card>
        <Card.Title>Profile</Card.Title>
        <Text>Profile</Text>
        <Card.Image size="large" square source={{uri: avatar}}></Card.Image>
        <Text>Name: {user.username}</Text>
        <Text>Email: {user.email}</Text>
        <Button title={'logout'} onPress={logout}></Button>
      </Card>
    </SafeAreaView>
  );
};

Profile.propTypes = {
  navigation: PropTypes.object,
  singleMedia: PropTypes.object,
  route: PropTypes.object,
};
export default Profile;
