import React from 'react';
import { View } from 'react-native';

import ActionButton from './ActionButton';

type ActionButtonsProps = {
  isOnYes: boolean;
  isOnNo: boolean;
  isOnPart: boolean;
  setToggles: (
    yesStatus?: boolean,
    noStatus?: boolean,
    partStatus?: boolean,
  ) => void;
  updateDatesByToggle: (toggleStatus: boolean, color: string) => void;
};

export default function ActionButtons({
  isOnYes,
  isOnNo,
  isOnPart,
  setToggles,
  updateDatesByToggle,
}: ActionButtonsProps) {
  function handleYesChange(value: boolean) {
    updateDatesByToggle(value, GREEN_COLOR);
    setToggles(value);
  }

  function handleNoChange(value: boolean) {
    updateDatesByToggle(value, RED_COLOR);
    setToggles(false, value);
  }

  function handlePartChange(value: boolean) {
    updateDatesByToggle(value, YELLOW_COLOR);
    setToggles(false, false, value);
  }

  return (
    <View style={{ alignItems: 'center' }}>
      <View style={{ flexDirection: 'row' }}>
        <ActionButton
          label="YES"
          color={GREEN_COLOR}
          isOn={isOnYes}
          onChange={handleYesChange}
        />
        <ActionButton
          label="NO"
          color={RED_COLOR}
          isOn={isOnNo}
          onChange={handleNoChange}
        />
      </View>
      <View style={{ marginTop: 15 }}>
        <ActionButton
          label="PART"
          color={YELLOW_COLOR}
          isOn={isOnPart}
          onChange={handlePartChange}
        />
      </View>
    </View>
  );
}
