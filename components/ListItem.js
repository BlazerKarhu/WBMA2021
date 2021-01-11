import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';
import GlobalStyles from '../utils/GlobalStyles';

const ListItem = (props) => {
  return (
    <TouchableOpacity style={GlobalStyles.container}>
      <View style={GlobalStyles.imagebox}>
        <Image
          style={GlobalStyles.image}
          source={{uri: props.singleMedia.thumbnails.w160}}
        />
      </View>
      <View style={GlobalStyles.textbox}>
        <Text style={GlobalStyles.title}>{props.singleMedia.title}</Text>
        <Text>{props.singleMedia.description}</Text>
      </View>
    </TouchableOpacity>
  );
};
ListItem.propTypes = {
  singleMedia: PropTypes.object,
};

export default ListItem;
