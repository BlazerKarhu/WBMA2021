import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text, Card} from 'react-native-elements';
import PropTypes from 'prop-types';
import {uploadsUrl} from '../utils/variables';

const Single = ({route}) => {
  const {file} = route.params;
  return (
    <SafeAreaView>
      <Card>
        <Card.Image
          source={{uri: uploadsUrl + file.filename}}
          style={{width: '100%', height: '80%'}}
          resizeMode="contain"
        />
        <Text h4>{file.title}</Text>
        <Text> {file.description} </Text>
      </Card>
    </SafeAreaView>
  );
};

Single.propTypes = {
  route: PropTypes.object,
};

export default Single;
