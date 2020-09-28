/* eslint-disable linebreak-style */
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useThemeTypes, Step2ScreenProps } from '../types';
import TextInputField from './TextInputField';
import { Text, View } from './Themed';

export default function CustomerLoginData({ navigation }: Step2ScreenProps):React.ReactElement {
  const insets = useSafeAreaInsets();
  const themeColors: useThemeTypes = useTheme();
  const {
    colors: {
      background, text,
    },
  } = themeColors;

  const [email, setEmail] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');

  const handleEmail = (inputText: string) => {
    setEmail(inputText);
  };
  
  const handleFullName = (inputText: string) => {
    setFullName(inputText);
  };

  const loginAndClear = () => {
    console.log(email, fullName);
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top, backgroundColor: background }]}>
      <Text style={styles.headerText}>Your details</Text>
      <View>
        <TextInputField
          placeholder="Full name"
          onChangeText={handleFullName}
        />
        <TextInputField
          placeholder="Email"
          onChangeText={handleEmail}
        />
        <TouchableOpacity
          style={styles.arrow}
          onPress={() => { loginAndClear(); navigation.navigate('notification'); }}
        >
          <Text style={styles.nextText}>Next</Text>
          <Ionicons name="ios-arrow-round-forward" size={32} color={text} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },
  buttonsWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    height: 67,
    marginTop: 12,
    marginBottom: 24,
  },
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
  arrow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    margin: 10,
  },
  nextText: {
    padding: 10,
    fontWeight: '500',
  },
});
