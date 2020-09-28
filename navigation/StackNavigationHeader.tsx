import { Ionicons } from '@expo/vector-icons';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import * as React from 'react';

import { useTheme } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  StartParamList,
  KnowledgeStackParamList,
  MapStackParamList,
  LeaderboardStackParamList,
  FavoritesStackParamList,
  RouteOptions,
  KnowledgeRoute,
  MapHomeProps,
  LeaderboardHomeProps,
  FavoritesHomeProps,
  NavigationStyle,
  StackNavigationReturns,
  useThemeTypes,
  themeColorTypes,
  StartHomeRoute,
} from '../types';

import {
  StartScreen,
  KnowledgeScreen,
  MapScreen,
  LeaderboardScreen,
  FavoritesScreen,
  ArticleScreen,
} from '../screens';
import { View } from '../components/Themed';

function createHeaderIcon(iconName: string, colorTheme: themeColorTypes, cb: () => void)
  : React.ReactElement {
  const backgroundColorSchema = colorTheme.dark
    ? colorTheme.colors.card
    : colorTheme.colors.primary;

  return (
    <TouchableOpacity onPress={cb}>
      <View style={[styles.container, { backgroundColor: backgroundColorSchema }]}>
        <TabBarIcon name={iconName} color="#fff" />
      </View>
    </TouchableOpacity>
  );
}
function OptionsSettings({ route }: RouteOptions) {
  const themeColors: useThemeTypes = useTheme();
  const backgroundColorSchema = themeColors.dark
    ? themeColors.colors.card
    : themeColors.colors.primary;

  if (route) {
    const options: StackNavigationOptions = {
      headerTitleStyle: { fontFamily: 'montserrat-semiBold', color: '#fff' },
      headerStyle: { backgroundColor: backgroundColorSchema },
      headerTitle: route.name,
      headerTitleAlign: 'center',
      headerLeft: () => createHeaderIcon('md-contact', themeColors, () => console.log('Open sesame! aka drawer for user')),
      headerRight: () => createHeaderIcon('md-notifications', themeColors, () => console.log('Bell icon')),
    };
    return options;
  }
}
const StartStack = createStackNavigator<StartParamList>();
function StartNavigator({ route }: StartHomeRoute): React.ReactElement {
  const colorTheme = useTheme();
  const backgroundColorSchema = colorTheme.dark
    ? colorTheme.colors.card
    : colorTheme.colors.primary;
  return (
    <StartStack.Navigator screenOptions={{ headerShown: true }}>
      <StartStack.Screen
        name="Start"
        component={StartScreen}
        options={OptionsSettings({ route })}
      />
      <StartStack.Screen
        name="ArticleScreen"
        component={ArticleScreen}
        options={{
          title: 'Article',
          headerTitleAlign: 'center',
          headerBackTitle: 'Back',
          headerStyle: { backgroundColor: backgroundColorSchema },
          headerTitleStyle: { fontFamily: 'montserrat-semiBold', color: '#fff' },
          headerTintColor: '#fff',
        }}
      />
    </StartStack.Navigator>
  );
}

const KnowledgeStack = createStackNavigator<KnowledgeStackParamList>();
function KnowledgeNavigator({ route }: KnowledgeRoute) {
  const colorTheme = useTheme();
  const backgroundColorSchema = colorTheme.dark
    ? colorTheme.colors.card
    : colorTheme.colors.primary;
  return (
    <KnowledgeStack.Navigator>
      <KnowledgeStack.Screen
        name="KnowledgeScreen"
        component={KnowledgeScreen}
        options={OptionsSettings({ route })}
      />
      <KnowledgeStack.Screen
        name="ArticleScreen"
        component={ArticleScreen}
        options={{
          title: 'Article',
          headerTitleAlign: 'center',
          headerBackTitle: 'Back',
          headerStyle: { backgroundColor: backgroundColorSchema },
          headerTitleStyle: { fontFamily: 'montserrat-semiBold', color: '#fff' },
          headerTintColor: '#fff',
        }}
      />
    </KnowledgeStack.Navigator>
  );
}

const MapStack = createStackNavigator<MapStackParamList>();

function MapNavigator({ route }: MapHomeProps) {
  return (
    <MapStack.Navigator>
      <MapStack.Screen
        name="MapScreen"
        component={MapScreen}
        options={OptionsSettings({ route })}
      />
    </MapStack.Navigator>
  );
}

const LeaderboardStack = createStackNavigator<LeaderboardStackParamList>();

function LeaderboardNavigator({ route }: LeaderboardHomeProps) {
  return (
    <LeaderboardStack.Navigator>
      <LeaderboardStack.Screen
        name="LeaderboardScreen"
        component={LeaderboardScreen}
        options={OptionsSettings({ route })}
      />
    </LeaderboardStack.Navigator>
  );
}

const FavoritesStack = createStackNavigator<FavoritesStackParamList>();

function FavoritesNavigator({ route }: FavoritesHomeProps) {
  return (
    <FavoritesStack.Navigator>
      <FavoritesStack.Screen
        name="FavoritesScreen"
        component={FavoritesScreen}
        options={OptionsSettings({ route })}
      />
    </FavoritesStack.Navigator>
  );
}
export default function StackNavigationHeader(stack: string): StackNavigationReturns {
  switch (stack) {
    case 'StartNavigator':
      return StartNavigator;
    case 'KnowledgeNavigator':
      return KnowledgeNavigator;
    case 'MapNavigator':
      return MapNavigator;
    case 'LeaderboardNavigator':
      return LeaderboardNavigator;
    case 'FavoritesNavigator':
      return FavoritesNavigator;
    default:
      return '';
  }
}
function TabBarIcon(props: { name: string; color: string }) {
  return (
    <Ionicons
      size={30}
      {...props}
    />
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
