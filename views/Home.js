import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import List from '../components/List';
import PropTypes from 'prop-types';

const Home = ({navigation}) => {
  return (
    <SafeAreaView>
      <List navigation={navigation} />
      <StatusBar backgroundColor="yellow" barStyle="dark-content"></StatusBar>
    </SafeAreaView>
  );
};
Home.propTypes = {
  navigation: PropTypes.object,
};
export default Home;
