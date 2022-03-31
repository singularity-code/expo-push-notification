import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Notification from 'expo-notifications';

export default function App() {
  useEffect(() => {
    registerForPushNotification().then(token => console.log(token)).catch(err => console.log(err));
  })
  async function registerForPushNotification() {
    // Get the token that uniquely identifies this device
    return (await Notification.getExpoPushTokenAsync()).data;
  }

  return (
    <View style={styles.container}>
      <Text>TEST PUSH NOTIFICATION</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
