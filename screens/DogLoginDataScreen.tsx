/* eslint-disable linebreak-style */
import * as React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from '../components/Themed';
import DogLoginData from '../components/DogLoginData';

export default function DogLoginDataScreen(): React.ReactElement {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: insets.top }}>
      <DogLoginData />
    </View>
  );
}
