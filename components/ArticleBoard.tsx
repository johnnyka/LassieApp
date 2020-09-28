import React, { useState, useEffect } from 'react';
import { useTheme } from '@react-navigation/native';

import { StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useQuery } from '@apollo/client';
import { TextInput } from 'react-native-gesture-handler';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { View, Text } from './Themed';
import ArticleCard from './ArticleCard';
import { ArticleData, KnowledgeProps, useThemeTypes } from '../types';
import LoadingIndicator from './LoadingIndicator';
import { ARTICLES_KNOWLEDGE_TAB } from '../queries/articles';

function ArticleBoard({ navigation }: KnowledgeProps): React.ReactElement {
  const [searchInput, setSearchInput] = useState<string>('');
  const [selectedFilter] = useState<string>('');
  const [filteredArticles, setFilteredArticles] = useState<
    ArticleData[] | undefined
  >();

  const themeColors: useThemeTypes = useTheme();
  const {
    colors: { card, text, background },
  } = themeColors;

  function filterArticles() {
    const searchRegex = new RegExp(searchInput, 'i');
    if (articles) {
      let filtered = articles.filter(
        (el) => searchRegex.test(el.title) || searchRegex.test(el.content),
      );
      if (selectedFilter && selectedFilter !== '') {
        filtered = filtered.filter((el) => el.filters.includes(selectedFilter));
      }
      setFilteredArticles(filtered);
    }
  }

  function RenderArticleCard({
    articleData,
    idx,
  }: {
    articleData: ArticleData;
    idx: number;
  }): React.ReactElement {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation?.navigate('ArticleScreen', articleData);
        }}
      >
        <ArticleCard key={idx} articleData={articleData} />
      </TouchableOpacity>
    );
  }

  function renderFlatList(data: ArticleData[]): React.ReactElement {
    return (
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <RenderArticleCard articleData={item} idx={index} />
        )}
        keyExtractor={(article) => article.id}
      />
    );
  }

  function renderArticleBoard(): React.ReactElement {
    if (filteredArticles?.length) return renderFlatList(filteredArticles);
    if (filteredArticles && !filteredArticles.length) {
      return <Text>No articles found based on search.</Text>;
    }
    if (!filteredArticles && articles && articles.length) return renderFlatList(articles);
    return <Text>No articles...</Text>;
  }

  const { loading, error, data } = useQuery<
    { articles: ArticleData[] } | undefined
  >(ARTICLES_KNOWLEDGE_TAB);

  useEffect(() => {
    filterArticles();
  }, [searchInput, selectedFilter]);

  if (loading) return <LoadingIndicator />;
  if (error) return <Text>Error fetching articles!</Text>;
  const articles = data?.articles;

  return (
    <>
      <View style={[styles.searchArea, { backgroundColor: card }]}>
        <TouchableOpacity>
          <AntDesign
            name="search1"
            style={[styles.searchIcon, { color: text }]}
          />
        </TouchableOpacity>
        <TextInput
          style={[styles.searchbar, { color: text }]}
          placeholder="Search"
          placeholderTextColor={text}
          autoCompleteType="off"
          onChangeText={(str) => setSearchInput(str)}
        />
      </View>
      <View style={[styles.filterArea, { backgroundColor: background }]}>
        <TouchableOpacity
          style={[styles.filterIcon, { backgroundColor: background }]}
        >
          <Ionicons name="ios-options" size={24} color={text} />
        </TouchableOpacity>
      </View>
      <View style={[styles.container, { backgroundColor: background }]}>
        {renderArticleBoard()}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    width: '100%',
    marginBottom: 80,
  },
  loading: {
    height: '100%',
  },
  searchArea: {
    flexDirection: 'row',
    position: 'absolute',
    marginLeft: 10,
    marginRight: 10,
    top: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  searchbar: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    fontSize: 20,
    fontFamily: 'montserrat-regular',
  },
  searchIcon: {
    padding: 10,
    fontSize: 25,
  },
  filterArea: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 15,
    marginTop: 45,
    marginBottom: 10,
  },
  filterIcon: {
    color: '#424242',
    fontSize: 20,
    alignSelf: 'flex-end',
    marginLeft: 10,
  },
  filterText: {
    fontSize: 15,
    color: '#424242',
  },
});

export default ArticleBoard;
