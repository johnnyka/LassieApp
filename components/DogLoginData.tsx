import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { useQuery } from '@apollo/client';

import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useThemeTypes, Step1ScreenProps } from '../types';
import { BREEDS_ONBOARDING } from '../queries/articles';
import { Text, View } from './Themed';
import ButtonGroup from './buttons/ButtonGroup';
import TextInputField from './TextInputField';
import DropdownMenu from './DropdownMenu';
import LoadingIndicator from './LoadingIndicator';

export default function DogLoginData({ navigation }: Step1ScreenProps): React.ReactElement {
  const insets = useSafeAreaInsets();
  const themeColors: useThemeTypes = useTheme();
  const {
    colors: { background, text },
  } = themeColors;
  const [dogName, setDogName] = useState<string>('');
  const [breed, setBreed] = useState<string | number>('');
  const [dogAge, setDogAge] = useState<string>('');
  const [ageType, setAgeType] = useState<string | number>('Weeks');
  const ageTypes = ['Weeks', 'Months', 'Years'];
  const buttons = [
    { 
      name: "Male", 
      pressHandler: () => console.log("clicked Male") 
    },
    {
      name: "Female",
      pressHandler: () => console.log("clicked Female"),
    },
  ];

  const handleDogName = (inputText: string) => {
    setDogName(inputText);
  };

  const handleDogAge = (inputText: string) => {
    setDogAge(inputText);
  };

  const loginAndClear = () => {
    console.log(dogName, breed, dogAge);
  };

  const { loading, error, data } = useQuery<
    { breeds: [{ breedName: string }] } | undefined
  >(BREEDS_ONBOARDING);

  if (loading) return <LoadingIndicator />;
  if (error) return <Text>Error fetching articles!</Text>;
  const breeds = data?.breeds.map((el) => el.breedName) || [];

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top, backgroundColor: background },
      ]}
    >
      <Text style={styles.headerText}>You are a lucky one!</Text>
      <Text
        style={{ fontFamily: 'montserrat-semiBold', fontSize: 16, color: text }}
      >
        Please tell us about your pet
      </Text>
      <ButtonGroup buttons={buttons}/>
      <View>
        <TextInputField placeholder="Dog name" onChangeText={handleDogName} />
        <View style={{
          borderStyle: 'solid', borderColor: '#FFFFFF', borderWidth: 2, borderRadius: 5, margin: 10,
        }}
        >
          <DropdownMenu data={{
            selected: breed, setSelected: setBreed, items: breeds, long: true,
          }}
          />
        </View>
        <View style={styles.formWrap}>
          <TextInput
            style={styles.numInput}
            underlineColorAndroid="transparent"
            placeholder="Dogs age"
            autoCapitalize="none"
            keyboardType="numeric"
            placeholderTextColor="grey"
            onChangeText={handleDogAge}
          />
          <View style={{
            borderStyle: 'solid', borderColor: '#FFFFFF', borderWidth: 2, borderRadius: 5,
          }}
          >
            <DropdownMenu data={{
              selected: ageType, setSelected: setAgeType, items: ageTypes, long: false,
            }}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.arrow}
          onPress={() => {
            loginAndClear();
            navigation.navigate('step2');
          }}
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
    marginTop: 10,
    marginBottom: 10,
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
  formWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  numInput: {
    width: 175,
    height: 55,
    borderStyle: 'solid',
    borderColor: '#FFFFFF',
    borderWidth: 2,
    padding: 8,
    color: 'black',
    borderRadius: 5,
    fontSize: 18,
    fontWeight: '500',
  },
  dropDown: {
    width: 171,
    height: 51,
    padding: 8,
    color: 'black',
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
