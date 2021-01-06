import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';

export default function YesButton() {
  const [status, setStatus] = useState(false);

  return (
    <ToggleSwitch
      onColor="green"
      offColor="red"
      isOn={status}
      onToggle={() => {
        setStatus(!status);
      }}
      size="large"
      label="PART"
      labelStyle={styles.label}
      animationSpeed={100}
      thumbOnStyle={styles.thumbOn}
      thumbOffStyle={styles.thumbOff}
      trackOnStyle={styles.trackOn}
      trackOffStyle={styles.trackOff}
    />
  );
}

const styles = StyleSheet.create({
  thumbOn: {
    backgroundColor: 'white',
  },
  thumbOff: {
    backgroundColor: '#f9ca60',
  },
  trackOff: {
    backgroundColor: 'white',
  },
  trackOn: {
    backgroundColor: '#f9ca60',
  },
  label: {
    color: '#f9ca60',
    fontSize: 25,
    fontFamily: 'WorkSans_700Bold',
  },
});
