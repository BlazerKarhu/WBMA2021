import React from 'react';
import {ImageBackground, StatusBar, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Menu, Settings} from 'react-native-feather';
import List from '../components/List';
import GlobalStyles from '../utils/GlobalStyles';
import PropTypes from 'prop-types';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <View style={GlobalStyles.header}>
        <ImageBackground
          // eslint-disable-next-line no-undef
          source={require('../assets/mountain-background.png')}
          style={GlobalStyles.bgimage}
          imageStyle={{borderBottomRightRadius: 10, borderBottomLeftRadius: 10}}
        ></ImageBackground>
        <Menu stroke="white" width={30} height={30} style={GlobalStyles.menu} />
        <Settings stroke="black" style={GlobalStyles.setting} />
        <Text style={GlobalStyles.hello}>Hello there</Text>
      </View>
      <List navigation={navigation} />
      <View style={GlobalStyles.footer}>
        <Text>This is the footer</Text>
      </View>
      <StatusBar backgroundColor="yellow" barStyle="dark-content"></StatusBar>
    </SafeAreaView>
  );
};
Home.propTypes = {
  navigation: PropTypes.object,
};
export default Home;
