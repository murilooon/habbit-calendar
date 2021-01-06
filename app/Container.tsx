import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Container() {
  return (
    <View style={styles.container}>
      <View style={styles.container_view}>
        <Text>Miau Miau</Text>
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
  },

  container_view: {
    marginTop: 50,
    width: 100,
    left: 0,
    right: 0,
  },
});
