import HalfCircle from '@/assets/img/bgReceipt.svg';
import BgShadow from '@/assets/img/bgReceiptShadow.svg';
import BSIMIcon from '@/assets/img/bsimLogo.svg';
import HalfCircleDark from '@/assets/img/dark/bgReceipt.svg';
import BgShadowDark from '@/assets/img/dark/bgReceiptShadow.svg';
import WaveImgDark from '@/assets/img/dark/wave.png';
import WaveImg from '@/assets/img/wave.png';
import Clock from '@/screens/layout/clock';
import Styles, { Theme } from '@/screens/layout/style';
import { memo, ReactElement } from 'react';
import { ImageBackground, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GradientExample = () => {
  return (
    <View style={{ ...Styles.containerLogo }}>
      <LinearGradient
        colors={['#996404', '#B69C6C']}
        style={{
          width: '100%',
          height: '100%',
          borderBottomRightRadius: 50,
        }}
        start={{ x: 0, y: 0 }} //default
        end={{ x: 1, y: 1 }} //default
        locations={[0.445, 0.7814]} // these are the percentages of the stops
      />
    </View>
  );
};

const containerLogo = {
  light: <View style={{ ...Styles.containerLogo, ...Theme.darkLogoContainer }} />,
  dark: <GradientExample />,
};
const footerTheme = {
  light: (
    <View style={{ ...Styles.containerFooter, ...Theme.lightFooterContainer }}>
      <Text style={Styles.footer}>Senin 16 Desember 2024</Text>
      <Clock />
    </View>
  ),
  dark: (
    <LinearGradient
      colors={['#E0AA3E', '#7A5D22']}
      style={{ ...Styles.containerFooter, ...Theme.lightFooterContainer, borderTopLeftRadius: 30, borderTopRightRadius: 30 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      locations={[0.0774, 1.039]}
    >
      <Text style={Styles.footer}>Senin 16 Desember 2024</Text>
      <Clock />
    </LinearGradient>
  ),
};

const HalfCircleComponent = {
  light: <HalfCircle style={Styles.halfCircleReceiptBg} />,
  dark: <HalfCircleDark style={Styles.halfCircleReceiptBg} />,
};

const BgShadowComponent = {
  light: <BgShadow style={Styles.bgShadowReceipt} />,
  dark: <BgShadowDark style={Styles.bgShadowReceipt} />,
};

const BgImgComponent = {
  light: (
    <View style={{ position: 'absolute', top: -60, right: -550, width: 1000, height: 400, display: 'flex' }}>
      <ImageBackground source={WaveImg} style={Styles.imgBackgroundReceipt} resizeMode='cover' resizeMethod='scale' />
    </View>
  ),
  dark: (
    <View style={{ position: 'absolute', top: -60, right: -550, width: 1000, height: 400, display: 'flex' }}>
      <ImageBackground source={WaveImgDark} style={Styles.imgBackgroundReceipt} resizeMode='cover' resizeMethod='scale' />
    </View>
  ),
};
function Index({ children }: { readonly children: ReactElement }) {
  return (
    <View style={(Styles.container, { backgroundColor: '#1B1917' })}>
      <View style={Styles.containerReceipt}>
        {HalfCircleComponent.dark}
        {BgShadowComponent.dark}
      </View>
      {BgImgComponent.dark}
      {containerLogo.dark}
      <BSIMIcon width={135} style={Styles.logo} />
      {children}
      {footerTheme.dark}
    </View>
  );
}

export default memo(Index);
