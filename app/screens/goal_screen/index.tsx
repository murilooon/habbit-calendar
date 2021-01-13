import type { RouteProp } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import type { RootStackParamList } from '../../../App';
import ActionButton from '../../components/ActionButton';

type GoalRouteProp = RouteProp<RootStackParamList, 'Goal'>;

type NavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type GoalScreenProps = {
  route: GoalRouteProp;
  navigation: NavigationProp;
};

export default function HomeScreen({ route, navigation }: GoalScreenProps) {
  const [toggle, setToggle] = useState(false);

  const { day, updateDay, removeDay } = route.params;

  function handleOnChange(value: boolean) {
    if (value) {
      updateDay(day, GREEN_COLOR);
    } else {
      removeDay(day['dateString']);
    }

    setToggle(value);
  }

  return (
    <LinearGradient colors={['#FDCD56', '#FCD277']} style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'column' }}>
        <ActionButton
          label="Duolingo"
          color={'black'}
          isOn={toggle}
          onChange={handleOnChange}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 100,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'WorkSans_400Regular',
  },
});
