import React from 'react';
import { View, StyleSheet } from 'react-native';

import ActionButtons from './ActionButtons';
import HabitCalendar from './HabitCalendar';

export default function Container() {
  return (
    <View style={styles.container}>
      <View style={styles.container_view}>
        <HabitCalendar />
        <ActionButtons />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    backgroundColor: 'white',
    flexDirection: 'row',
  },

  container_view: {
    flex: 1,
    marginTop: 50,
    width: 100,
    left: 0,
    right: 0,
  },
});
