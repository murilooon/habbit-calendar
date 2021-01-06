import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';

type ActionButtonProps = {
  label: string;
  color: string;
};

export default function ActionButton({ label, color }: ActionButtonProps) {
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
      label={label}
      labelStyle={{ color, fontSize: 25, fontFamily: 'WorkSans_700Bold' }}
      animationSpeed={100}
      thumbOnStyle={styles.thumbOn}
      thumbOffStyle={{ backgroundColor: color }}
      trackOnStyle={{ backgroundColor: color }}
      trackOffStyle={styles.trackOff}
    />
  );
}

const styles = StyleSheet.create({
  thumbOn: {
    backgroundColor: 'white',
  },
  trackOff: {
    backgroundColor: 'white',
  },
});
