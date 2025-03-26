import SplashScreen from '@/assets/img/bsimLogoSplashScreen.png';
import { StackActions, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';

function Index() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace('Regist'));
    }, 950);
  }, [navigation]);
  return (
    <View style={Style.container}>
      <Image source={SplashScreen} style={Style.logoSplash} />
    </View>
  );
}

export default Index;

const Style = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  logoSplash: { width: 210, height: 48 },
});
