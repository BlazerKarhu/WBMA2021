import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import List from './components/List';

const App = () => {
  return (
    <SafeAreaView>
      <List />
      <StatusBar style="auto"></StatusBar>
    </SafeAreaView>
  );
};

export default App;
