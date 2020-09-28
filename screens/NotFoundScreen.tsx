import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View, Button,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { RootStackParamList } from '../types';

export default function NotFoundScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>): React.ReactElement {
  const insets = useSafeAreaInsets();
  const padding = { paddingTop: insets.top };
  return (
    <View style={[styles.box, padding]}>
      <Text style={styles.title404}>404</Text>
      <Text style={styles.title}>Oops! The page you are looking for does not exist</Text>
      <TouchableOpacity style={styles.link}>
        <Button title="Home" onPress={() => navigation.replace('Root')} />

      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  title404: {
    fontSize: 60,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
