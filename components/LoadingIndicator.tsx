import React from 'react';
import { ActivityIndicator } from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

export default function LoadingIndicator(): React.ReactElement {
  const colorScheme = useColorScheme();
  return (
    <ActivityIndicator size={72} color={Colors[colorScheme].primary} />
  );
}
