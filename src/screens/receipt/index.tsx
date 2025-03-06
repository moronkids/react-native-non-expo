import BsimLogoDark from '@/assets/img/bsimLogoDark.svg';
import Scallop from '@/screens/receipt/scallop';
import { useNavigationState } from '@react-navigation/native';
import { Text, View } from 'react-native';
import Layout from '../layout/receipt';
import Style from './style';

type RoutesState = {
  key: string;
  name: string;
  params: {
    service: string;
  };
};
function Index() {
  const navigation = useNavigationState((state) => state.routes[state.index]) as RoutesState;
  const nameOfService = navigation.params.service;
  return (
    <Layout>
      <View style={Style.container}>
        <View style={{ display: 'flex', alignItems: 'center', gap: 31 }}>
          <View>
            <Text style={Style.title}>Silakan ambil tiket antrean Anda</Text>
          </View>
          <View style={Style.containerReceipt}>
            <View style={Style.wrapperReceiptContent}>
              <View style={Style.wrapperReceiptHeader}>
                <BsimLogoDark />
                <Text style={Style.headerTitle}>Bank Sinarmas KCU Thamrin Jakarta {'\n'}Senin, 16 Desember 2024 08:20</Text>
              </View>
              <View style={Style.wrapperQueue}>
                <Text style={Style.titleQueue}>Nomor antrean Anda</Text>
                <Text style={Style.numberOfQueue}>A001</Text>
                <Text style={Style.nameOfService}>{nameOfService}</Text>
              </View>
              <View style={Style.wrapperInformation}>
                <Text style={Style.textInformation}>Silahkan download SimobiPlus untuk kemudahan transaksi digital.</Text>
              </View>
            </View>
            <Scallop
              circleColor='#FBE3E4'
              circleOpacity='100'
              circleCount={21}
              style={{
                position: 'absolute',
                bottom: -5,
              }}
            />
            <Scallop
              circleColor='white'
              circleOpacity='100'
              circleCount={21}
              reverse={true}
              style={{
                position: 'absolute',
                top: -5,
              }}
            />
          </View>
        </View>
        <View style={Style.containerMenu}></View>
      </View>
    </Layout>
  );
}

export default Index;
