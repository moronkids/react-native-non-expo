import { DARK, LIGHT } from '@/helpers/constant/theme';
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
      const isPriority = (response !== null && JSON.parse(response)) || false;
      setIsPriority(isPriority);
    } catch {
      return false;
    }
  };
  useEffect(() => {
    getCustomerType();
  }, []);
  return (
    <Layout theme={isPriority ? DARK : LIGHT}>
      <View style={Registration.container}>
        <View>
          <Text style={titleTheme[isPriority ? DARK : LIGHT]}>Selamat datang</Text>
          <Text style={descTheme[isPriority ? DARK : LIGHT]}>Silakan pilih layanan</Text>
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
