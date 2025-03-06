import HalfCircle from '@/assets/img/bgReceipt.svg';
import BgShadow from '@/assets/img/bgReceiptShadow.svg';
import BSIMIcon from '@/assets/img/bsimLogo.svg';
import WaveImg from '@/assets/img/wave.png';
import Clock from '@/screens/layout/clock';
import Styles from '@/screens/layout/style';
import { memo, ReactElement } from 'react';
import { ImageBackground, Text, View } from 'react-native';
function Index({ children }: { readonly children: ReactElement }) {
  return (
    <View style={Styles.container}>
      <View style={Styles.containerReceipt}>
        <HalfCircle style={Styles.halfCircleReceiptBg} />
        <BgShadow style={Styles.bgShadowReceipt} />
      </View>
      <View style={{ position: 'absolute', top: -60, right: -550, width: 1000, height: 400, display: 'flex' }}>
        <ImageBackground source={WaveImg} style={Styles.imgBackgroundReceipt} resizeMode='cover' resizeMethod='scale' />
      </View>
      <View style={Styles.containerLogo} />
      <BSIMIcon width={135} style={Styles.logo} />
      {children}
      <View style={Styles.containerFooter}>
        <Text style={Styles.footer}>Senin 16 Desember 2024</Text>
        <Clock />
      </View>
    </View>
  );
}

export default memo(Index);
