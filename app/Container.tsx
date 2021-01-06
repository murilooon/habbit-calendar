import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import HabitCalendar from './HabitCalendar';

export default function Modal() {
  return (
    <LinearGradient colors={['#FFFFFF', '#FCD277']} style={styles.container}>
      <View style={styles.container_view}>
        <View style={styles.container}>
          {/* <HabitCalendar /> */}
          <Text>Miau Miau</Text>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
  },

  container_view: {
    marginTop: 50,
    width: 100,
    left: 0,
    right: 0,
  },
});
