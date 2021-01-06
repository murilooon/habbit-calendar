import React from 'react';
import { View } from 'react-native';

import NoButton from './NoButton';
import PartButton from './PartButton';
import YesButton from './YesButton';

export default function ActionButtons() {
  return (
    <View style={{ alignItems: 'center' }}>
      <View style={{ flexDirection: 'row' }}>
        <YesButton />
        <NoButton />
      </View>
      <View style={{ marginTop: 15 }}>
        <PartButton />
      </View>
    </View>
  );
}
