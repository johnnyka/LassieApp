import React from 'react';
import {
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { Text, View } from './Themed';

import { ArticleData, useThemeTypes } from '../types';

export default function Article({ articleData }: { articleData: ArticleData }): React.ReactElement {
  const themeColors: useThemeTypes = useTheme();
  const { colors: { tabIconSelected, background, text } } = themeColors;
  const articleImage = { uri: articleData.imgUri };
  const articleTitle = articleData.title;
  const articleText = articleData.content;
  const articleTime = articleData.readTime;
  const articleViews = articleData.views;

  return (
    <ScrollView>
      <View style={[styles.articleContainer, { backgroundColor: background }]}>
        <Image
          style={styles.image}
          source={articleImage}
        />

        <Text style={[styles.title, { color: text }]}>{articleTitle}</Text>

        <View style={[styles.dataContainer, { backgroundColor: background }]}>
          <View style={[styles.leftDataContainer, { backgroundColor: background }]}>
            <SimpleLineIcons style={[styles.clock, { color: tabIconSelected }]} name="clock" />
            <Text style={[styles.dataContent, { color: tabIconSelected }]}>{`${articleTime} min`}</Text>
            <Text style={[styles.dataContent, { color: tabIconSelected }]}>{`${articleViews} Views`}</Text>
          </View>

          <View style={{ backgroundColor: background }}>
            <TouchableOpacity
              style={[
                styles.touchableHeart,
                {
                  backgroundColor: background,
                }]}
            >
              <SimpleLineIcons style={[styles.heart, { color: tabIconSelected }]} name="heart" size={30} />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={[styles.text, { color: text }]}>{articleText}</Text>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  articleContainer: {
    padding: 30,
  },
  image: {
    height: 200,
  },
  title: {
    paddingTop: 16,
    paddingBottom: 8,
    fontSize: 26,
    fontFamily: 'montserrat-semiBold',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  dataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftDataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  dataContent: {
    paddingRight: 24,
    fontSize: 16,
  },
  text: {
    paddingTop: 8,
    fontSize: 18,
  },
  clock: {
    paddingRight: 4,
  },
  touchableHeart: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  heart: {
    paddingTop: 4,
  },
});
