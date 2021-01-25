import React, {useContext, useState} from 'react';
import {View, Alert} from 'react-native';
import {Text, Button, Input} from 'react-native-elements';
import PropTypes from 'prop-types';
import useSignUpForm from '../hooks/RegisterHooks';
import {useLogin, useUser} from '../hooks/ApiHooks';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MainContext} from '../contexts/MainContext';

const RegisterForm = ({navigation}) => {
  const {loading, setLoading} = useState(false);
  const {setIsLoggedIn, setUser} = useContext(MainContext);
  const {inputs, handleInputChange} = useSignUpForm();
  const {postRegister} = useUser();
  const {postLogin} = useLogin();

  const doRegister = async () => {
    setLoading(true);
    try {
      const result = await postRegister(inputs);
      console.log('doRegister ok', result.message);
      Alert.alert(result.message);
      // automatic login after register
      const userData = await postLogin(inputs);
      await AsyncStorage.setItem('userToken', userData.token);
      setIsLoggedIn(true);
      setUser(userData.user);
      setLoading(false);
    } catch (error) {
      console.log('Registration error', error.message);
      Alert.alert('Registration failed', error.message);
      setLoading(false);
    }
  };

  return (
    <View>
      <Text style={{textAlign: 'center'}} h3>
        Register
      </Text>
      <Input
        autoCapitalize="none"
        placeholder="username"
        onChangeText={(txt) => handleInputChange('username', txt)}
        onEndEditing={(event) => {
          console.log(event.nativeEvent.text);
        }}
      />
      <Input
        autoCapitalize="none"
        placeholder="password"
        onChangeText={(txt) => handleInputChange('password', txt)}
        secureTextEntry={true}
      />
      <Input
        autoCapitalize="none"
        placeholder="email"
        onChangeText={(txt) => handleInputChange('email', txt)}
      />
      <Input
        autoCapitalize="none"
        placeholder="full name"
        onChangeText={(txt) => handleInputChange('full_name', txt)}
      />
      {<Button loading={loading} title="Register!" onPress={doRegister} />}
    </View>
  );
};
RegisterForm.propTypes = {
  navigation: PropTypes.object,
};
export default RegisterForm;
