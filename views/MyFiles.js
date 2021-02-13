import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import List from '../components/List';
import PropTypes from 'prop-types';

const MyFiles = ({navigation}) => {
  return (
    <SafeAreaView>
      <List navigation={navigation} myFilesOnly={true} />
      <StatusBar backgroundColor="yellow" barStyle="dark-content"></StatusBar>
    </SafeAreaView>
  );
};
MyFiles.propTypes = {
  navigation: PropTypes.object,
};
export default MyFiles;
