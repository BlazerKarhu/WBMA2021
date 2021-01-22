import React, {useContext, useEffect} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import {MainContext} from '../contexts/MainContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useLogin} from '../hooks/ApiHooks';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import GlobalStyles from '../utils/GlobalStyles';

const Login = ({navigation}) => {
  const {isLoggedIn, setIsLoggedIn, setUser} = useContext(MainContext);
  console.log('isloggedIn?', isLoggedIn);
  // props is needed for navigation
  const {checkToken} = useLogin();

  const getToken = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    console.log('token', userToken);
    if (userToken) {
      try {
        const userData = await checkToken(userToken);
        setUser(userData);
        setIsLoggedIn(true);
        navigation.navigate('Home');
      } catch (error) {
        console.log('getToken check failed', error.messge);
      }
    }
  };
  useEffect(() => {
    getToken();
  }, []);

  return (
    <View style={GlobalStyles.container}>
      <LoginForm navigation={navigation} />
      <RegisterForm navigation={navigation} />
    </View>
  );
};

Login.propTypes = {
  navigation: PropTypes.object,
};

export default Login;
