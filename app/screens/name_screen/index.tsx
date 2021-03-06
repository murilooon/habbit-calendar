import AsyncStorage from '@react-native-async-storage/async-storage';
import type { StackNavigationProp } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';

import type { RootStackParamList } from '../../../App';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Name'
>;

type NameScreenProps = {
  navigation: ProfileScreenNavigationProp;
};

export default function NameScreen({ navigation }: NameScreenProps) {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState({ borderColor: 'black' });

  useEffect(() => {
    const loadName = async () => {
      try {
        const value = await AsyncStorage.getItem('@Name');

        if (value !== null) navigation.navigate('Home');
      } catch (e) {
        console.log(e);
      }
    };

    loadName();
  }, [navigation]);

  const saveNameValue = async (value: string) => {
    try {
      await AsyncStorage.setItem('@Name', value);
    } catch (e) {
      console.log(e);
    }
  };

  function handleButtonPress() {
    if (name) {
      saveNameValue(name);
      navigation.navigate('Home');
    }
  }

  function handleNameChange(value: string) {
    if (value) {
      setNameError({ borderColor: 'black' });
      setName(value);
    } else {
      setNameError({ borderColor: 'red' });
      setName(value);
    }
  }

  return (
    <LinearGradient colors={['#FDCD56', '#FCD277']} style={styles.container}>
      <Text style={styles.text}>Qual o seu nome?</Text>
      <TextInput
        style={[styles.text_input, nameError]}
        onChangeText={(value) => handleNameChange(value)}
        value={name}
        maxLength={15}
        placeholder="Nome"
      />
      <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  text_input: {
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 100,
    height: 60,
    width: 350,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'WorkSans_400Regular',
    marginBottom: 30,
  },
  text: {
    fontSize: 35,
    marginBottom: 15,
    fontFamily: 'WorkSans_700Bold',
  },
  button: {
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 100,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'WorkSans_400Regular',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
