import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from './src/navigation/Navigation';
// import FadeScreen from './src/screens/FadeScreen';

// import {LogBox } from 'react-native';
// LogBox.ignoreLogs(['Reanimated 2']);

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
      {/* <FadeScreen /> */}
    </NavigationContainer>
  );
}
