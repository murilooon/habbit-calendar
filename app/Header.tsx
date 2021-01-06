import {
  useFonts,
  IndieFlower_400Regular,
} from '@expo-google-fonts/indie-flower';
import {
  WorkSans_400Regular,
  WorkSans_700Bold,
} from '@expo-google-fonts/work-sans';
import AppLoading from 'expo-app-loading';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import HabbitLogo from './HabbitLogo';

export default function Header() {
  const [fontsLoaded] = useFonts({
    IndieFlower_400Regular,
    WorkSans_400Regular,
    WorkSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View>
      <View style={styles.title_container}>
        <HabbitLogo />
        <Text style={styles.title_text}>Habbit</Text>
      </View>
      <View style={styles.subtitle_container}>
        <Text style={styles.subtitle_text}>Welcome, Murilo</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title_container: {
    marginLeft: 20,
    marginTop: 50,
    marginBottom: 8,
    flexDirection: 'row',
  },
  subtitle_container: {
    marginLeft: 35,
    marginBottom: 20,
  },
  title_text: {
    color: 'white',
    paddingLeft: 20,
    fontSize: 50,
    fontFamily: 'IndieFlower_400Regular',
  },
  subtitle_text: {
    fontSize: 20,
    fontFamily: 'WorkSans_400Regular',
    color: 'white',
  },
});
