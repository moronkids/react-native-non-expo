import BSIMIcon from '@/assets/img/bsimLogo.svg';
import WaveDark from '@/assets/img/dark/wave.png';
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
const imgBackground = {
  dark: WaveDark,
  light: WaveImg,
};
function Index({ children }: { readonly children: ReactElement }) {
  return (
    <View style={{ ...Styles.container, ...Theme.darkBgColor }}>
      {containerLogo.dark}
      <ImageBackground source={imgBackground.dark} style={{ ...Styles.imgBackground }} />
      <BSIMIcon width={135} style={Styles.logo} />
      {children}
      {footerTheme.dark}
    </View>
  );
}

export default memo(Index);
