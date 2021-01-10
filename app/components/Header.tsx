import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import HabbitLogo from './HabbitLogo';

export default function Header() {
  const [name, setName] = useState<string>();

  useEffect(() => {
    const loadName = async () => {
      try {
        const value = await AsyncStorage.getItem('@Name');

        if (value !== null) setName(value);
      } catch (e) {
        console.log(e);
      }
    };

    loadName();
  }, [setName]);

  return (
    <View>
      <View style={styles.title_container}>
        <HabbitLogo />
        <Text style={styles.title_text}>Habbit</Text>
      </View>
      <View style={styles.subtitle_container}>
        <Text style={styles.subtitle_text}>Bem-vindo(a), {name}!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title_container: {
    marginLeft: 20,
    marginTop: 50,
    marginBottom: 8,
    flexDirection: 'row',
  },
  subtitle_container: {
    marginLeft: 35,
    marginBottom: 20,
  },
  title_text: {
    color: 'white',
    paddingLeft: 20,
    fontSize: 50,
    fontFamily: 'IndieFlower_400Regular',
  },
  subtitle_text: {
    fontSize: 20,
    fontFamily: 'WorkSans_400Regular',
    color: 'white',
  },
});
