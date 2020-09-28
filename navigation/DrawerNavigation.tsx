import React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

function profileScreen() {
  return (
    <View>
      <Text>Profile Screen</Text>
    </View>
  );
}
const UserDrawer = createDrawerNavigator();

export default function DrawerNavigation(): React.ReactElement {
  return (
    <UserDrawer.Navigator drawerContentOptions={{
      activeTintColor: '#e91e63',
      itemStyle: { marginVertical: 5 },
    }}
    >
      <UserDrawer.Screen
        name="Profile"
        options={{ drawerLabel: 'Profile' }}
        component={profileScreen}
      />
    </UserDrawer.Navigator>
  );
}
