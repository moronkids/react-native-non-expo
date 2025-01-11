
import Details from '@/screens/detail';
import Home from '@/screens/home';
import SplashScreen from '@/screens/splashScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function RootStack() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{
            title: 'Splash Screen',
            headerTitleAlign: 'center',
            headerShown: false,
        }}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    );
}

function Routes() {
    return (
        <NavigationContainer>
            <RootStack />
        </NavigationContainer>
    );
}

export default Routes;
