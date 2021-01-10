import 'react-native-gesture-handler';
import {
  useFonts,
  IndieFlower_400Regular,
} from '@expo-google-fonts/indie-flower';
import {
  WorkSans_400Regular,
  WorkSans_700Bold,
} from '@expo-google-fonts/work-sans';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import HomeScreen from './app/screens/home_screen';
import NameScreen from './app/screens/name_screen';
import './app/global.ts';

export type RootStackParamList = {
  Name: undefined;
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  const [fontsLoaded] = useFonts({
    IndieFlower_400Regular,
    WorkSans_400Regular,
    WorkSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={YELLOW_COLOR} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Name" component={NameScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
