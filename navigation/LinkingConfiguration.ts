import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Start: {
            screens: {
              StartScreen: 'Start',
            },
          },
          Knowledge: {
            screens: {
              KnowledgeScreen: 'knowledge',
              ArticleScreen: 'article',
            },
          },
          Map: {
            screens: {
              MapScreen: 'map',
            },
          },
          Leaderboard: {
            screens: {
              LeaderboardScreen: 'leaderboard',
            },
          },
          Favorites: {
            screens: {
              FavoritesScreen: 'favorites',
            },
          },

        },
      },
      NotFound: '*',
    },
  },
};
