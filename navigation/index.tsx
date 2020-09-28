import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import { OnboardingStackParamList, RootStackParamList, themeColorTypes } from '../types';
import Colors from '../constants/Colors';
import NotFoundScreen from '../screens/NotFoundScreen';

import BottomTabNavigator from './BottomTabNavigator';
import DrawerNavigation from './DrawerNavigation';
import LinkingConfiguration from './LinkingConfiguration';
import NotificationScreen from '../screens/Onboarding/NotificationScreen';
import PersonFormScreen from '../screens/Onboarding/PersonFormScreen';
import dogFormScreen from '../screens/Onboarding/DogFormScreen';

export default function Navigation({ colorScheme }: {
  colorScheme: ColorSchemeName;
}): React.ReactElement {
  /* TODO any type on colors when using bracket notation
    How I want to do -> Colors[colorScheme].background
    What works Colors.dark.card
  */
  const firstTime = false;

  const lassieTheme: themeColorTypes = {
    ...DefaultTheme,
    colors: {
      card: Colors.light.background,
      background: Colors.light.background,
      primary: Colors.light.primary,
      text: Colors.light.text,
      textSecondary: Colors.light.textSecondary,
      tint: Colors.light.tint,
      tintLighter: Colors.light.tintLighter,
      tabIconDefault: Colors.light.tabIconDefault,
      tabIconSelected: Colors.light.tabIconSelected,
    },
  };

  const lassieThemeDark: themeColorTypes = {
    ...DarkTheme,
    colors: {
      card: Colors.dark.card,
      background: Colors.dark.background,
      primary: Colors.dark.primary,
      text: Colors.dark.text,
      textSecondary: Colors.dark.textSecondary,
      tint: Colors.dark.tint,
      tintLighter: Colors.dark.tintLighter,
      tabIconDefault: Colors.dark.tabIconDefault,
      tabIconSelected: Colors.dark.tabIconSelected,
    },
  };
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'light' ? lassieTheme : lassieThemeDark}
    >
      {firstTime
        ? <Onboarding />
        : <RootNavigator />}
    </NavigationContainer>
  );
}

function RootNavigator() {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="Drawer" component={DrawerNavigation} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'NotFound' }}
      />
    </Stack.Navigator>
  );
}

function Onboarding() {
  const Stack = createStackNavigator<OnboardingStackParamList>();

  return (
    <Stack.Navigator screenOptions={{ headerShown: true }} initialRouteName="step1">
      <Stack.Screen
        name="step1"
        component={dogFormScreen}
        options={{
          title: 'step 1/2',
        }}
      />
      <Stack.Screen
        name="step2"
        component={PersonFormScreen}
        options={{
          title: 'step 2/2',
        }}
      />
      <Stack.Screen
        name="notification"
        component={NotificationScreen}
        options={{
          title: 'Enable Notifications',
        }}

      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'NotFound' }}
      />
    </Stack.Navigator>
  );
}
