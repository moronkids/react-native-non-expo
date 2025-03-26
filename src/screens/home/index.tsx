import Hexagon from '@/screens/home/itemOfMenu';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Layout from '../layout';
import MenuData from './menu.data';
import Registration, { useDynamicDimensionScale } from './style';

const titleTheme = {
  dark: { ...Registration.title, ...Registration.titleDark },
  light: Registration.title,
};

const descTheme = {
  dark: { ...Registration.desc, ...Registration.descDark },
  light: Registration.desc,
};

function Index() {
  const [isPriority, setIsPriority] = useState<boolean>();
  const scale = useDynamicDimensionScale();
  const getCustomerType = async () => {
    try {
      const response = (await AsyncStorage.getItem('isPriority')) ?? 'false';
      console.log(response, JSON.parse(response) === 'true', '<<home-rep');

      const isPriority = (response !== null && JSON.parse(response)) || false;
      setIsPriority(isPriority);
    } catch {
      console.log('error get customer type');
      return false;
    }
  };
  useEffect(() => {
    getCustomerType();
  }, []);
  console.log('<<home', isPriority);

  return (
    <Layout theme={isPriority ? 'dark' : 'light'}>
      <View style={Registration.container}>
        <View>
          <Text style={titleTheme[isPriority ? 'dark' : 'light']}>Selamat datang</Text>
          <Text style={descTheme[isPriority ? 'dark' : 'light']}>Silakan pilih layanan</Text>
        </View>
        <View style={[Registration.containerMenu, { transform: [{ scale: scale }] }]}>
          {MenuData.map((item) => (
            <Hexagon key={item.title} title={item.title} Icon={item[isPriority ? 'iconDark' : 'icon']} isPriority={isPriority ?? false} />
          ))}
        </View>
      </View>
    </Layout>
  );
}

export default Index;
