import {
  useFonts,
  IndieFlower_400Regular,
} from '@expo-google-fonts/indie-flower';
import AppLoading from 'expo-app-loading';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import HabbitLogo from './HabbitLogo';

export default function Header() {
  const [fontsLoaded] = useFonts({
    IndieFlower_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <HabbitLogo />
      <Text style={styles.title}>Habbit</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 30,
    flex: 1,
    marginTop: 50,
    flexWrap: 'wrap',
  },
  title: {
    color: 'white',
    paddingLeft: 10,
    fontSize: 50,
    fontFamily: 'IndieFlower_400Regular',
  },
});
