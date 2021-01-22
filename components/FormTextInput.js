import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const FormTextInput = ({style, ...otherProps}) => {
  return <TextInput style={[styles.textInput, style]} {...otherProps} />;
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    width: 200,
    borderColor: '#ccc',
    borderWidth: 1,
    textAlign: 'center',
  },
});
FormTextInput.propTypes = {
  style: PropTypes.object,
};
export default FormTextInput;
