import OnWorking from '@/assets/img/on_working.png';
import { Image, View } from 'react-native';
import { Text } from 'react-native-paper';
import { Style } from './style';

const Card = () => {
  return (
    <View style={Style.card}>
      <Image
        source={OnWorking}
        style={{
          width: '100%',
          height: 300,
        }}
        resizeMode='contain'
      />
      <Text variant='titleMedium' style={{ textAlign: 'center', paddingBottom: 20 }}>
        Task Completed {'\n'}13 / 20
      </Text>
    </View>
  );
};

export default Card;
