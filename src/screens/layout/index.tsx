import Detail from '@/screens/detail';
import { TabHome } from '@/screens/home';
import BottomNav from '@/screens/layout/bottomNav';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();
console.log(MaterialCommunityIcons, '<<ico');

function Index() {
  return (
    <BottomNav>
      {TabHome}
      <Tab.Screen
        name='detail'
        component={Detail}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => {
            return <MaterialCommunityIcons name='home' size={size} color={color} />;
          },
        }}
      />
    </BottomNav>
  );
}

export default Index;
