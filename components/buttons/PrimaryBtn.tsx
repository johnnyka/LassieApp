import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme } from '@react-navigation/native';

import { Text } from '../Themed';
import { ButtonProps, useThemeTypes } from '../../types';
import Layout from '../../constants/Layout';

function PrimaryBtn({ title, onPress }: ButtonProps): React.ReactElement {
  const themeColors: useThemeTypes = useTheme();

  const { colors: { textSecondary, primary } } = themeColors;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ backgroundColor: primary, ...styles.container }}
    >
      <Text
        style={{ ...styles.text, color: textSecondary }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    height: 67,
    marginTop: 12,
    marginBottom: 24,
    minWidth: Layout.window.width - 102,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    fontFamily: 'montserrat-semiBold',
  },
});

export default PrimaryBtn;
