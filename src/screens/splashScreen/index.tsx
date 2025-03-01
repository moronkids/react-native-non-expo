import SplashScreen from '@/assets/img/splash-screen.png';
import { StackActions, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { Image, View } from 'react-native';

function Index() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace('Home'));
    }, 950);
  }, [navigation]);
  return (
    <View
      style={{
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Image source={SplashScreen} style={{ width: 160, height: 35 }} />
    </View>
  );
}

export default Index;
