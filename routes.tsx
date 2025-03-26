import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home';
import Receipt from './src/screens/receipt';
import Registration from './src/screens/register';
import SplashScreen from './src/screens/splashScreen';

function RootStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        title: 'Splash Screen',
        headerTitleAlign: 'center',
        headerShown: false,
      }}
    >
      <Stack.Screen name='Regist' component={Registration} />
      <Stack.Screen name='SplashScreen' component={SplashScreen} />
      <Stack.Screen name='Registration' component={Home} />
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Receipt' component={Receipt} />
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
