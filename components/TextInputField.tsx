import React from 'react';

import {
  StyleSheet, TextInput,
} from 'react-native';
import { TextInputFieldProps } from '../types';

export default function TextInputField(props: TextInputFieldProps): React.ReactElement {
  const { placeholder, onChangeText } = props;

  return (
    <TextInput
      style={styles.input}
      underlineColorAndroid="transparent"
      placeholder={placeholder}
      autoCapitalize="none"
      placeholderTextColor="grey"
      onChangeText={onChangeText}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderStyle: 'solid',
    borderColor: '#FFFFFF',
    borderWidth: 2,
    width: 350,
    height: 55,
    margin: 10,
    padding: 8,
    color: 'black',
    borderRadius: 5,
    fontSize: 18,
    fontWeight: '500',
  },
});
