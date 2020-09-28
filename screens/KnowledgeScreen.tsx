import * as React from 'react';
import { StyleSheet } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import { View } from '../components/Themed';
import ArticleBoard from '../components/ArticleBoard';

import { KnowledgeProps, useThemeTypes } from '../types';

export default function KnowledgeScreen({ navigation }: KnowledgeProps): React.ReactElement {
  const insets = useSafeAreaInsets();
  const themeColors: useThemeTypes = useTheme();
  const { colors: { background } } = themeColors;
  return (
    <View style={[styles.container, { backgroundColor: background, paddingTop: insets.top }]}>
      <ArticleBoard navigation={navigation} />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
