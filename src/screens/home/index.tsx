import { useNavigation } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';

function Index() {
  const { navigate } = useNavigation();
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#fff',
        position: 'relative',
      }}
    >
      <Text
        style={{
          textAlign: 'center',
        }}
      >
        Home Screen
      </Text>
      <Button title='details' onPress={() => navigate('Details' as never)} accessibilityLabel='test' />
      <View
        style={{
          position: 'absolute',
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          height: 160,
          width: '100%',
          backgroundColor: '#FC4C85',
          bottom: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            display: 'flex',
          }}
        >
          {/* <Image source={AddIcon} style={{ width: 16, height: 16 }} resizeMode='cover' /> */}
        </View>
      </View>
    </View>
  );
}

export default Index;
