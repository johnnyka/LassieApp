import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import { useTheme } from '@react-navigation/native';

import StackNavigationHeader from './StackNavigationHeader';
import {
  BottomTabParamList,
  NavigationStyle,
  useThemeTypes,
} from '../types';

function TabBarIcon(props: { name: string; color: string }) {
  return (
    <Ionicons
      size={30}
      {...props}
    />
  );
}

export default function BottomTabNavigator(): React.ReactElement {
  const themeColors: useThemeTypes = useTheme();

  const { colors: { tabIconDefault, tabIconSelected } } = themeColors;
  const BottomTab = createBottomTabNavigator<BottomTabParamList>();
  return (
    <BottomTab.Navigator
      initialRouteName="Start"
      tabBarOptions={
        {
          ...styles.container,
          activeTintColor: tabIconSelected,
          inactiveTintColor: tabIconDefault,
          // tabStyle: { paddingTop: 0 }
        }
      }
    >
      <BottomTab.Screen
        name="Start"
        component={StackNavigationHeader('StartNavigator')}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-home" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Knowledge"
        component={StackNavigationHeader('KnowledgeNavigator')}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-bulb" color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="Map"
        component={StackNavigationHeader('MapNavigator')}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-pin" color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="Leaderboard"
        component={StackNavigationHeader('LeaderboardNavigator')}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="md-star" color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="Favorites"
        component={StackNavigationHeader('FavoritesNavigator')}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="md-heart" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

const styles: NavigationStyle = {
  container: {
    labelStyle: {
      fontWeight: 'bold',
    },
    paddingLeft: 30,
    paddingRight: 30,
  },
};
