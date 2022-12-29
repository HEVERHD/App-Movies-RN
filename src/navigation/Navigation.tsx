import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import HomeScreenPrueba from '../screens/HomeScreenPrueba';
import { Movie } from '../interfaces/movieinterfaces';


export type RootStackParams = {
    HomeScreenPrueba: undefined,
    DetailScreen: Movie

}

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown:false,
            headerStyle:{
                elevation: 0,
              },
                cardStyle: {
                    // backgroundColor: 'white',
                },
        }}
        >
            {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
            <Stack.Screen name="HomeScreenPrueba" component={HomeScreenPrueba} />
            <Stack.Screen name="DetailScreen" options={{}} component={DetailScreen} />
        </Stack.Navigator>
    );
};
