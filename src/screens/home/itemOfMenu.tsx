import HexagonContainer from '@/assets/img/hexagon.svg';
import { StackActions, useNavigation } from '@react-navigation/native'; // Import navigation hook
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { Menu as Style } from './style';

function Hexagon({ title, Icon }: Readonly<{ title: string; Icon: React.FC<SvgProps> }>) {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.dispatch(
      StackActions.push('Receipt', {
        service: title,
      })
    );
  };

  return (
    <TouchableOpacity onPress={handlePress} style={{ position: 'relative' }}>
      <View style={Style.container}>
        <Text style={Style.titleOfService}>{title}</Text>
        <Icon width={70} height={70} style={{ zIndex: 2 }} />
        <HexagonContainer width={200} height={200} style={{ zIndex: 1, position: 'absolute' }} />
      </View>
      <View style={Style.boxShadow} />
    </TouchableOpacity>
  );
}

export default Hexagon;
