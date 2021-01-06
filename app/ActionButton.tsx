import React from 'react';
import { StyleSheet } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';

type ActionButtonProps = {
  label: string;
  color: string;
  onChange: (value: boolean) => void;
  isOn: boolean;
};

export default function ActionButton({
  label,
  color,
  onChange,
  isOn,
}: ActionButtonProps) {
  return (
    <ToggleSwitch
      onColor="green"
      offColor="red"
      isOn={isOn}
      onToggle={onChange}
      size="large"
      label={label}
      labelStyle={{ color, fontSize: 25, fontFamily: 'WorkSans_700Bold' }}
      animationSpeed={100}
      thumbOnStyle={styles.thumbOn}
      thumbOffStyle={{ backgroundColor: color }}
      trackOnStyle={{ backgroundColor: color }}
      trackOffStyle={{
        backgroundColor: 'white',
        borderColor: color,
        borderWidth: 2,
      }}
    />
  );
}

const styles = StyleSheet.create({
  thumbOn: {
    backgroundColor: 'white',
  },
  trackOff: {
    backgroundColor: 'white',
    borderColor: '#20232a',
    borderWidth: 2,
  },
});
