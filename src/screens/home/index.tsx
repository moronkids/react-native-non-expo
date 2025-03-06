import Hexagon from '@/screens/home/itemOfMenu';
import { Text, View } from 'react-native';
import Layout from '../layout';
import MenuData from './menu.data';
import Registration, { useDynamicDimensionScale } from './style';

function Index() {
  const scale = useDynamicDimensionScale();
  return (
    <Layout>
      <View style={Registration.container}>
        <View>
          <Text style={Registration.title}>Selamat datang</Text>
          <Text style={Registration.desc}>Silakan pilih layanan</Text>
        </View>
        <View style={[Registration.containerMenu, { transform: [{ scale: scale }] }]}>
          {MenuData.map((item) => (
            <Hexagon key={item.title} title={item.title} Icon={item.icon} />
          ))}
        </View>
      </View>
    </Layout>
  );
}

export default Index;
