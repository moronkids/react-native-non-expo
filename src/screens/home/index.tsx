import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';
import { Button, Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../layout/header';
import Card from './card';

const Tab = createBottomTabNavigator();
function Index() {
  const { navigate } = useNavigation();
  return (
    <View>
      <Header />
      <View
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          height: '100%',
          backgroundColor: '#fff',
          position: 'relative',
          padding: 20,
        }}
      >
        <Card />
        <Text
          style={{
            textAlign: 'center',
          }}
        >
          Home Screen
        </Text>
        <Button title='details' onPress={() => navigate('Details' as never)} accessibilityLabel='test' />
      </View>
    </View>
  );
}

export default memo(Index);

function DetailTabIcon({ color, size }: Readonly<{ color: string; size: number }>) {
  return <MaterialCommunityIcons name='home' size={size} color={color} />;
}

export const TabHome = (
  <Tab.Screen
    name='home'
    component={Index}
    options={{
      tabBarLabel: 'Home',
      tabBarIcon: DetailTabIcon,
    }}
  />
);
