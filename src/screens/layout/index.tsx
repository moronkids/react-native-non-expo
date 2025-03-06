import BSIMIcon from '@/assets/img/bsimLogo.svg';
import WaveImg from '@/assets/img/wave.png';
import Clock from '@/screens/layout/clock';
import Styles from '@/screens/layout/style';
import { memo, ReactElement } from 'react';
import { ImageBackground, Text, View } from 'react-native';

function Index({ children }: { readonly children: ReactElement }) {
  return (
    <View style={Styles.container}>
      <View style={Styles.containerLogo} />
      <ImageBackground source={WaveImg} style={Styles.imgBackground} />
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
