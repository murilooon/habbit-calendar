import type { StackNavigationProp } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet } from 'react-native';

import type { RootStackParamList } from '../../../App';
import Container from '../../components/Container';
import Header from '../../components/Header';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type HommeScreenProps = {
  navigation: NavigationProp;
};

export default function HomeScreen({ navigation }: HommeScreenProps) {
  return (
    <LinearGradient colors={['#FDCD56', '#FCD277']} style={styles.container}>
      <Header />
      <Container navigation={navigation} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
