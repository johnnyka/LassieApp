import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text, View } from '../components/Themed';
import Layout from '../constants/Layout';

import ArticleSummary from '../components/ArticleSummary';
import SecondaryBtn from '../components/buttons/SecondaryBtn';
import PrimaryBtn from '../components/buttons/PrimaryBtn';
import MyDog from '../components/MyDog';
import { useThemeTypes, StartHomeProps } from '../types';

export default function StartScreen({ navigation }: StartHomeProps): React.ReactElement {
  const insets = useSafeAreaInsets();
  const themeColors: useThemeTypes = useTheme();

  const { colors: { background, text } } = themeColors;
  return (
    <ScrollView>

      <View style={[styles.container, { paddingTop: insets.top, backgroundColor: background }]}>
        <MyDog />
        <ArticleSummary navigation={navigation} />

        <View style={[styles.btnWrapper, { backgroundColor: background }]}>
          <Text style={{ fontSize: 13, color: text, fontFamily: 'montserrat-regular' }}>
            Summerize your weekly activites and gain points for your progress
          </Text>
          <PrimaryBtn title="Summarize" onPress={() => console.log('Fix me on startscreen, summerize btn')} />
          <Text style={{ fontFamily: 'montserrat-semiBold', fontSize: 16, color: text }}>We are here to help</Text>
          <SecondaryBtn title="Ask question" onPress={() => console.log('Fix me on startscreen, ASK QUESTION btn')} />
        </View>
      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  btnWrapper: {
    width: Layout.window.width - 102,
    marginTop: 16,
    alignItems: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
