import BsimLogoDark from '@/assets/img/bsimLogoDark.svg';
import Scallop from '@/screens/receipt/scallop';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigationState } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import MenuData from '../home/menu.data';
import Layout from '../layout/receipt';
import Style from './style';

type RoutesState = {
  key: string;
  name: string;
  params: {
    service: string;
  };
};

const mappingCounterOrder = {
  [MenuData[0].title]: 'A',
  [MenuData[1].title]: 'B',
  [MenuData[2].title]: 'C',
  [MenuData[3].title]: 'D',
  [MenuData[4]?.title]: 'E',
};

const ScallopColor = {
  light: '#FBE3E4',
  dark: '#372C17',
  darkTop: '#1B1917',
};

const StyleTitle = {
  light: Style.title,
  dark: Style.titleDark,
};
function Index() {
  const navigation = useNavigationState((state) => state.routes[state.index]) as RoutesState;
  const nameOfService = navigation.params.service;
  const [isPriority, setIsPriority] = useState<boolean>();
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

  return (
    <Layout theme={isPriority ? 'dark' : 'light'}>
      <View style={Style.container}>
        <View style={{ display: 'flex', alignItems: 'center', gap: 31 }}>
          <View>
            <Text style={StyleTitle[isPriority ? 'dark' : 'light']}>Silakan ambil tiket antrean Anda</Text>
          </View>
          <View style={Style.containerReceipt}>
            <View style={Style.wrapperReceiptContent}>
              <View style={Style.wrapperReceiptHeader}>
                <BsimLogoDark />
                <Text style={Style.headerTitle}>Bank Sinarmas KCU Thamrin Jakarta {'\n'}Senin, 16 Desember 2024 08:20</Text>
              </View>
              <View style={Style.wrapperQueue}>
                <Text style={Style.titleQueue}>Nomor antrean Anda</Text>
                <Text style={Style.numberOfQueue}>{`${mappingCounterOrder[nameOfService]}001`}</Text>
                <Text style={Style.nameOfService}>{nameOfService}</Text>
              </View>
              <View style={Style.wrapperInformation}>
                <Text style={Style.textInformation}>Silahkan download SimobiPlus untuk kemudahan transaksi digital.</Text>
              </View>
            </View>
            <Scallop
              circleColor={ScallopColor[isPriority ? 'dark' : 'light']}
              circleOpacity='100'
              circleCount={21}
              style={{
                position: 'absolute',
                bottom: -6,
              }}
            />
            <Scallop
              circleColor={ScallopColor.darkTop}
              circleOpacity='100'
              circleCount={21}
              reverse
              style={{
                position: 'absolute',
                top: -6,
                display: isPriority ? 'flex' : 'none',
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
