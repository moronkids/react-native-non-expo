
import SplashScreen from '@/screens/splashScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native';

const RootStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{
            contentStyle: {
                alignItems: 'center',
            },
            header: () => <Text>S</Text>,
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
