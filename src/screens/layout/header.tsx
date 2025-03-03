import BSIMLogo from '@/assets/img/splash-screen.png';
import { Image, Text, View } from 'react-native';
import { header } from './style';

function Header() {
  return (
    <View style={header.container}>
      <View style={{ width: '30%' }}>
        <Image source={BSIMLogo} style={{ height: 35, width: '100%' }} resizeMode='contain' />
      </View>
      <View>
        <Text>SprintRec</Text>
      </View>
    </View>
  );
}

export default Header;
