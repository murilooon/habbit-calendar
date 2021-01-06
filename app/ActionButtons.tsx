import React from 'react';
import { View } from 'react-native';

import ActionButton from './ActionButton';

export default function ActionButtons() {
  return (
    <View style={{ alignItems: 'center' }}>
      <View style={{ flexDirection: 'row' }}>
        <ActionButton label="YES" color="#94cf83" />
        <ActionButton label="NO" color="#f06f6a" />
      </View>
      <View style={{ marginTop: 15 }}>
        <ActionButton label="PART" color="#f9ca60" />
      </View>
    </View>
  );
}
