import React, {useContext} from 'react';
import {Alert, Button, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import FormTextInput from './FormTextInput';
import useLogInForm from '../hooks/LoginHooks';
import {useLogin} from '../hooks/ApiHooks';
import {MainContext} from '../contexts/MainContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginForm = ({navigation}) => {
  const {inputs, handleInputChange} = useLogInForm();
  const {postLogin} = useLogin();
  const {setIsLoggedIn} = useContext(MainContext);

  const doLogin = async () => {
    try {
      const userData = await postLogin(inputs);
      console.log('doLogin ok', userData.message);
      Alert.alert(userData.message);
      setIsLoggedIn(true);
      await AsyncStorage.setItem('userToken', userData.token);
    } catch (error) {
      console.log('Login error', error.message);
      Alert.alert('Login error', error.message);
    }
  };

  return (
    <View>
      <Text>Login</Text>
      <FormTextInput
        autoCapitalize="none"
        placeholder="username"
        onChangeText={(txt) => handleInputChange('username', txt)}
      />
      <FormTextInput
        autoCapitalize="none"
        placeholder="password"
        onChangeText={(txt) => handleInputChange('password', txt)}
        secureTextEntry={true}
      />
      <Button title="Sign in!" onPress={doLogin} />
    </View>
  );
};
LoginForm.propTypes = {
  navigation: PropTypes.object,
};
export default LoginForm;
