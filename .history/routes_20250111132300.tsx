import { createNativeStackNavigator } from 'node_modules/@react-navigation/native-stack/lib/typescript/commonjs/src';
import React from 'react';
import SplashScreen from '@/screens/splashScreen';

const Routes = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
        </Stack.Navigator>
    );
};

export default Routes;
