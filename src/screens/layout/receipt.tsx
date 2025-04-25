import HalfCircle from '@/assets/img/bgReceipt.svg';
import BgShadow from '@/assets/img/bgReceiptShadow.svg';
import BSIMIcon from '@/assets/img/bsimLogo.svg';
import HalfCircleDark from '@/assets/img/dark/bgReceipt.svg';
import BgShadowDark from '@/assets/img/dark/bgReceiptShadow.svg';
import WaveImgDark from '@/assets/img/dark/wave.png';
import WaveImg from '@/assets/img/wave.png';
import { DARK, LIGHT } from '@/helpers/constant/theme';
import { GlobProvider, useGlobalContext } from '@/helpers/context';
import Clock from '@/screens/layout/clock';
import Styles, { Theme } from '@/screens/layout/style';
import { THEME } from '@/types/theme';
import { useNavigation, useRoute } from '@react-navigation/native';
import { memo, ReactElement, useEffect } from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LogoutPrompt from './logoutPrompt';
import Profile from './profile';

const GradientExample = () => {
  return (
    <View testID='containerLogoDark' style={{ ...Styles.containerLogo }}>
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
  light: <View testID='containerLogoLight' style={{ ...Styles.containerLogo, ...Theme.lightLogoContainer }} />,
  dark: <GradientExample />,
};
const footerTheme = {
  light: (
    <View testID='containerFooterLight' style={{ ...Styles.containerFooter, ...Theme.lightFooterContainer }}>
      <Text style={Styles.footer}>Senin 16 Desember 2024</Text>
      <Clock />
    </View>
  ),
  dark: (
    <LinearGradient
      testID='containerFooterDark'
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
  light: <HalfCircle testID='halfCircleLight' style={Styles.halfCircleReceiptBg} />,
  dark: <HalfCircleDark testID='halfCircleDark' style={Styles.halfCircleReceiptBg} />,
};

const BgShadowComponent = {
  light: <BgShadow testID='bgShadowLight' style={Styles.bgShadowReceipt} />,
  dark: <BgShadowDark testID='bgShadowDark' style={Styles.bgShadowReceipt} />,
};

const BgImgComponent = {
  light: (
    <View testID='bgImgLight' style={{ position: 'absolute', top: -60, right: -550, width: 1000, height: 400, display: 'flex' }}>
      <ImageBackground source={WaveImg} style={Styles.imgBackgroundReceipt} resizeMode='cover' resizeMethod='scale' />
    </View>
  ),
  dark: (
    <View testID='bgImgDark' style={{ position: 'absolute', top: -60, right: -550, width: 1000, height: 400, display: 'flex' }}>
      <ImageBackground source={WaveImgDark} style={Styles.imgBackgroundReceipt} resizeMode='cover' resizeMethod='scale' />
    </View>
  ),
};

const profile = {
  dark: <Profile theme={DARK} />,
  light: <Profile theme={LIGHT} />,
};

function Index({ children, theme }: Readonly<{ readonly children: ReactElement; theme: THEME }>) {
  const { isProfileShown, logoutPromptIsActive, toggleLogoutPrompt, toggleProfile } = useGlobalContext();
  const route = useRoute();
  const navigation = useNavigation();
  useEffect(() => {
    if (!logoutPromptIsActive && route.name === 'Home') {
      navigation.addListener('beforeRemove', (e) => {
        e.preventDefault();
        toggleLogoutPrompt();
      });
    }
  }, [navigation, toggleLogoutPrompt, logoutPromptIsActive]);
  return (
    <View style={(Styles.container, { backgroundColor: theme === DARK ? '#1B1917' : '#FFFFFF' })}>
      {isProfileShown && (
        <TouchableOpacity
          testID='toggle-profile'
          onPress={toggleProfile}
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: 'transparent',
            position: 'absolute',
            top: 0,
            zIndex: 5,
          }}
        />
      )}
      <LogoutPrompt theme={theme} />
      <View style={Styles.containerReceipt}>
        {HalfCircleComponent[theme]}
        {BgShadowComponent[theme]}
      </View>
      {BgImgComponent[theme]}
      {containerLogo[theme]}
      <BSIMIcon width={135} style={Styles.logo} />
      {children}
      {footerTheme[theme]}
      {profile[theme]}
    </View>
  );
}

function LayoutProvider({ children, theme }: Readonly<{ readonly children: ReactElement; theme: THEME }>) {
  return (
    <GlobProvider>
      <Index theme={theme}>{children}</Index>
    </GlobProvider>
  );
}

export default memo(LayoutProvider);
