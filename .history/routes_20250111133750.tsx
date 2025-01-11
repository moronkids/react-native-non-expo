
import React from 'react';
import SplashScreen from '@/screens/splashScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const RootStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
        </Stack.Navigator>
    );
};

const Routes = () => {
    <NavigationContainer>
        <RootStack />
    </NavigationContainer>;
};

export default Routes;
