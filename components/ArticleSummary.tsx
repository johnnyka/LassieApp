import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useQuery } from '@apollo/client';
import { useTheme } from '@react-navigation/native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import Layout from '../constants/Layout';
import { Text, View } from './Themed';
import { ArticleData, useThemeTypes, StartHomeProps } from '../types';
import LoadingIndicator from './LoadingIndicator';
import { ARTICLES_START_TAB } from '../queries/articles';

export default function ArticleSummary({ navigation }: StartHomeProps): React.ReactElement {
  const themeColors: useThemeTypes = useTheme();
  const {
    colors: {
      background, text, card, tintLighter, tint,
    },
  } = themeColors;

  function renderArticles(articles: ArticleData[]): React.ReactElement[] {
    return (articles).map((article: ArticleData, index: number) => (
      <View key={article.id} style={{ ...styles.article, backgroundColor: card }}>
        <View style={[styles.timeWrap, { backgroundColor: tintLighter }]}>
          <View style={[
            styles.articleNumWrap,
            { backgroundColor: tintLighter },
          ]}
          >
            <Text
              style={[
                styles.articleNum,
                {
                  color: tint,
                }]}
            >
              {index + 1}
            </Text>
          </View>
          <View style={[
            styles.time,
            {
              backgroundColor: tintLighter,
            },
          ]}
          >
            <AntDesign name="clockcircleo" size={12} color={tint} />
            <Text style={{ color: tint, fontSize: 12 }}>4 min</Text>
          </View>
        </View>
        <View
          style={{
            ...styles.articleTextWrap,
            backgroundColor: card,
          }}
        >
          <Text style={{ color: text }} ellipsizeMode="tail" numberOfLines={4}>{article.content}</Text>
        </View>
        <TouchableOpacity
          style={{ justifyContent: 'center' }}
          onPress={() => navigation.navigate('ArticleScreen', article)}
        >
          <Ionicons name="ios-arrow-round-forward" size={32} color={text} />
        </TouchableOpacity>
      </View>
    ));
  }

  const { loading, error, data } = useQuery<
    { articles: ArticleData[] } | undefined>(ARTICLES_START_TAB);

  if (loading) return <LoadingIndicator />;
  if (error) return <Text>Error fetching articles!</Text>;

  const articles = data?.articles;
  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      <Text style={[styles.title, { color: text }]}>We recommend</Text>
      <View style={[styles.articleWrap, { backgroundColor: card }]}>
        {articles && articles.length
          ? renderArticles(articles)
          : <Text>No recommended articles to show</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Layout.window.width,
  },
  articleWrap: {
    width: '100%',
    padding: 12,
  },
  article: {
    flexDirection: 'row',
    paddingBottom: 12,
    height: 96,
    overflow: 'hidden',
  },
  timeWrap: {
    width: 80,
    padding: 8,
    borderRadius: 8,
  },
  time: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  articleNumWrap: {
    alignItems: 'center',

  },
  articleNum: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  articleTextWrap: {
    paddingLeft: 8,
    paddingRight: 8,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 12,
  },

});
