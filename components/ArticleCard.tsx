import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { View, Text } from './Themed';
import { ArticleData, useThemeTypes } from '../types';

function ArticleCard({ articleData }: { articleData: ArticleData }): React.ReactElement {
  const themeColors: useThemeTypes = useTheme();
  const {
    colors: {
      tint, card, text,
    },
  } = themeColors;
  return (
    <View style={[styles.card, { backgroundColor: card }]}>

      <View style={styles.cardHeader}>
        <Text style={[styles.title, { backgroundColor: card, color: text }]}>
          {articleData.title}
        </Text>
        <TouchableOpacity style={{ backgroundColor: card }}>
          <SimpleLineIcons style={{ color: tint }} name="heart" size={30} />
        </TouchableOpacity>
      </View>

      <Text style={[styles.content, { color: text }]} ellipsizeMode="tail" numberOfLines={4}>
        {articleData.content}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    maxHeight: 150,
    overflow: 'hidden',
  },
  cardHeader: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  content: {
    fontSize: 15,
  },

  title: {
    flex: 1,
    fontSize: 20,
    fontFamily: 'montserrat-semiBold',
  },
});

export default ArticleCard;
