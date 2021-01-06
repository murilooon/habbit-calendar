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
      label="YES"
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
    backgroundColor: '#94cf83',
  },
  trackOff: {
    backgroundColor: 'white',
  },
  trackOn: {
    backgroundColor: '#94cf83',
  },
  label: {
    color: '#94cf83',
    fontSize: 25,
    fontFamily: 'WorkSans_700Bold',
  },
});
