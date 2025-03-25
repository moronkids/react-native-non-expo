import Hexagon from '@/screens/home/itemOfMenu';
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
  const scale = useDynamicDimensionScale();
  return (
    <Layout>
      <View style={Registration.container}>
        <View>
          <Text style={titleTheme.dark}>Selamat datang</Text>
          <Text style={descTheme.dark}>Silakan pilih layanan</Text>
        </View>
        <View style={[Registration.containerMenu, { transform: [{ scale: scale }] }]}>
          {MenuData.map((item) => (
            <Hexagon key={item.title} title={item.title} Icon={item.iconDark} />
          ))}
        </View>
      </View>
    </Layout>
  );
}

export default Index;
