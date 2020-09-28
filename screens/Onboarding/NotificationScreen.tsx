import * as React from 'react';
import { Platform, StyleSheet, Alert } from 'react-native';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, View } from '../../components/Themed';
import PrimaryBtn from '../../components/buttons/PrimaryBtn';

async function registerPushNotifications(): Promise<string | undefined> {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      Alert.alert('Failed to get push token for push notification!');
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    Alert.alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}

export default function NotificationScreen(): React.ReactElement {
  async function handlePress(): Promise<void> {
    const token = await registerPushNotifications();
    console.log('This token will be used to send notifications later: ', token);
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={styles.text}>Using notifications increases your chances of success by</Text>
      <Text style={styles.percentage}>100%</Text>
      <PrimaryBtn
        title="trigger notifications"
        onPress={() => {
          handlePress()
            .then(() => console.log('enabeling push notifications'))
            .catch((err: Error) => Alert.alert(err.message));
        }}
      />
      <TouchableOpacity>
        <Text style={styles.notNow}>not now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  percentage: {
    fontSize: 100,
    textAlign: 'center',
    marginTop: 80,
    marginBottom: 80,
    color: 'coral',
    fontFamily: 'montserrat-semiBold',
    textTransform: 'uppercase',
  },
  notNow: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'montserrat-semiBold',
    textTransform: 'uppercase',
  },
  text: {
    fontFamily: 'montserrat-semiBold',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
