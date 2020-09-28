/* eslint-disable linebreak-style */
import * as React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from '../components/Themed';
import CustomerLoginData from '../components/CustomerLoginData';
import { Step2ScreenProps } from '../types';

export default function CustomerLoginScreen({ navigation }: Step2ScreenProps): React.ReactElement {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: insets.top }}>
      <CustomerLoginData navigation={navigation} />
    </View>
  );
}
