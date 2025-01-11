
import SplashScreen from '@/screens/splashScreen';
import Home from '@/screens/home';
import Details from '@/screens/detail';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

const RootStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{
            title: 'Splash Screen',
            headerTitleAlign: 'center',
        }}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={Details} />
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
