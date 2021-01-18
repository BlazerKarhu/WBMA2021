import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';
import GlobalStyles from '../utils/GlobalStyles';
import {uploadsUrl} from '../utils/variables';

const ListItem = ({navigation, singleMedia}) => {
  return (
    <TouchableOpacity
      style={GlobalStyles.container}
      onPress={() => {
        navigation.navigate('Single', {file: singleMedia});
      }}
    >
      <View style={GlobalStyles.card}>
        <View style={GlobalStyles.imagebox}>
          <Image
            style={GlobalStyles.image}
            source={{uri: uploadsUrl + singleMedia.thumbnails.w160}}
          />
        </View>
        <View style={GlobalStyles.textbox}>
          <Text style={GlobalStyles.title}>{singleMedia.title}</Text>
          <Text>{singleMedia.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
ListItem.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.object,
};

export default ListItem;
