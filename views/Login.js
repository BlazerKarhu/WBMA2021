import React, {useContext, useEffect, useState} from 'react';
import {
  Keyboard,
  // KeyboardAvoidingView,
  // Platform,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import {MainContext} from '../contexts/MainContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useUser} from '../hooks/ApiHooks';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import {StyleSheet} from 'react-native';
import {Button, Card, Text} from 'react-native-elements';

const Login = ({navigation}) => {
  const {isLoggedIn, setIsLoggedIn, setUser} = useContext(MainContext);
  const [formToggle, setFormToggle] = useState(true);
  console.log('isloggedIn?', isLoggedIn);
  // props is needed for navigation
  const {checkToken} = useUser();

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
    <ScrollView>
      {/* <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >*/}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.form}>
          {formToggle ? (
            <Card>
              <LoginForm navigation={navigation} />
            </Card>
          ) : (
            <Card>
              <RegisterForm navigation={navigation} />
            </Card>
          )}
          <Text>{formToggle ? 'no account?' : 'Already have account?'}</Text>
          <Button
            title={formToggle ? 'Register' : 'Login'}
            onPress={() => {
              setFormToggle(!formToggle);
            }}
          />
        </View>
      </TouchableWithoutFeedback>
      {/* </KeyboardAvoidingView>*/}
    </ScrollView>
  );
};

Login.propTypes = {
  navigation: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  appTitle: {
    flex: 1,
  },
  form: {
    flex: 4,
    justifyContent: 'center',
  },
});
export default Login;
