import React, { useState } from 'react';
import { View } from 'react-native';

import ActionButton from './ActionButton';

export default function ActionButtons() {
  const [isOnYes, setIsOnYes] = useState(false);
  const [isOnNo, setIsOnNo] = useState(false);
  const [isOnPart, setIsOnPart] = useState(false);

  function handleIsOnYesChange(value: boolean) {
    setIsOnYes(value);
  }

  function handleIsOnNoChange(value: boolean) {
    setIsOnNo(value);
  }

  function handleIsOnPartChange(value: boolean) {
    setIsOnPart(value);
  }

  return (
    <View style={{ alignItems: 'center' }}>
      <View style={{ flexDirection: 'row' }}>
        <ActionButton
          label="YES"
          color="#94cf83"
          isOn={isOnYes}
          onChange={handleIsOnYesChange}
        />
        <ActionButton
          label="NO"
          color="#f06f6a"
          isOn={isOnNo}
          onChange={handleIsOnNoChange}
        />
      </View>
      <View style={{ marginTop: 15 }}>
        <ActionButton
          label="PART"
          color="#f9ca60"
          isOn={isOnPart}
          onChange={handleIsOnPartChange}
        />
      </View>
    </View>
  );
}
