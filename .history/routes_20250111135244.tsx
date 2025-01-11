
import SplashScreen from '@/screens/splashScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

const RootStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{
            contentStyle: {
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
            },

        }}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
        </Stack.Navigator>
    );
};

const Routes = () => {
    return (
        <NavigationContainer>
            <RootStack />
        </NavigationContainer>
    );
};

export default Routes;
