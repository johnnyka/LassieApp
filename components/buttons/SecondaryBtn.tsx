import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme } from '@react-navigation/native';
import { Text } from '../Themed';
import { ButtonProps, useThemeTypes } from '../../types';
import Layout from '../../constants/Layout';
import useColorScheme from '../../hooks/useColorScheme';

function SecondaryBtn({ title, onPress }: ButtonProps): React.ReactElement {
  const themeColors: useThemeTypes = useTheme();

  const {
    colors: {
      text, primary, background, card,
    },
  } = themeColors;
  const schemaColor = useColorScheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: schemaColor === 'light' ? background : card,
        borderColor: primary,
        ...styles.container,
      }}
    >
      <Text
        style={
          [styles.text, { color: text }]
        }
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
    minWidth: Layout.window.width - 102,
    marginTop: 12,
    marginBottom: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
  text: {
    fontSize: 25,
    fontFamily: 'montserrat-semiBold',
  },
});

export default SecondaryBtn;
