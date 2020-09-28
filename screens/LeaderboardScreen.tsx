import * as React from 'react';
import { StyleSheet } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import { Text, View } from '../components/Themed';
import { useThemeTypes } from '../types';

export default function LeaderboardScreen(): React.ReactElement {
  const insets = useSafeAreaInsets();
  const themeColors: useThemeTypes = useTheme();

  const { colors: { background, text } } = themeColors;
  return (

    <View style={[styles.container, { backgroundColor: background, paddingTop: insets.top }]}>
      <Text style={[styles.title, { color: text }]}>Leaderboard Screen</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
