import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import { GradientProvider } from './src/context/GradientContext';
// import FadeScreen from './src/screens/FadeScreen';

// import {LogBox } from 'react-native';
// LogBox.ignoreLogs(['Reanimated 2']);

const AppState = ({ children }: any) => {
    return <GradientProvider>{children}</GradientProvider>;
};

export default function App() {
    return (
        <NavigationContainer>
            <AppState>
                <Navigation />
            </AppState>
            {/* <FadeScreen /> */}
        </NavigationContainer>
    );
}
