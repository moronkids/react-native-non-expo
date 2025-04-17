import HexagonContainerDark from '@/assets/img/dark/hexagon.svg';
import HexagonContainer from '@/assets/img/hexagon.svg';
import { DARK, LIGHT } from '@/helpers/constant/theme';
import { StackActions, useNavigation } from '@react-navigation/native'; // Import navigation hook
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { Menu as Style } from './style';

const hexagonTheme = {
  light: <HexagonContainer width={200} height={200} style={{ zIndex: 1, position: 'absolute' }} />,
  dark: <HexagonContainerDark width={200} height={200} style={{ zIndex: 1, position: 'absolute' }} />,
};

const titleTheme = {
  light: Style.titleOfService,
  dark: Style.titleOfServiceDark,
};

function Hexagon({ title, Icon, isPriority }: Readonly<{ title: string; Icon: React.FC<SvgProps>; isPriority: boolean }>) {
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
        <Text style={titleTheme[isPriority ? DARK : LIGHT]}>{title}</Text>
        <Icon width={70} height={70} style={{ zIndex: 2 }} />
        {hexagonTheme[isPriority ? DARK : LIGHT]}
      </View>
      <View style={Style.boxShadow} />
    </TouchableOpacity>
  );
}

export default Hexagon;
