import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ActionButtons from './app/ActionButtons';
import Header from './app/Header';

export default function App() {
  return (
    <LinearGradient colors={['#FDCD56', '#FCD277']} style={styles.container}>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#fdce58" />
        <Header />
        <ActionButtons />
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
