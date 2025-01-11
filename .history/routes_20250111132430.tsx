
import React from 'react';
import SplashScreen from '@/screens/splashScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Routes = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
        </Stack.Navigator>
    );
};

export default Routes;
