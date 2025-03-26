import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import Layout from '../layout';

function Index() {
  const navigation = useNavigation();
  const [branchCode, setBranchCode] = React.useState('');

  const setCustomerType = async (isPriority: boolean) => {
    try {
      await AsyncStorage.setItem('isPriority', String(isPriority));
      navigation.dispatch(StackActions.push('Home', { branchCode }));
    } catch {
      console.log('error set customer type');
    }
  };

  return (
    <Layout theme={'light'}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          gap: 20,
        }}
      >
        <Text
          style={{
            color: 'black',
            fontFamily: 'text-font-body',
            fontWeight: 800,
            fontSize: 72,
            textAlign: 'center',
          }}
        >
          Masukan kode cabang
        </Text>
        <TextInput
          style={{
            width: '80%',
            height: 50,
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 8,
            paddingHorizontal: 15,
            fontSize: 24,
            fontFamily: 'text-font-body',
          }}
          value={branchCode}
          onChangeText={setBranchCode}
          placeholder='Masukkan kode cabang'
          placeholderTextColor='#999'
        />
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            gap: 30,
          }}
        >
          <TouchableOpacity onPress={() => setCustomerType(false)}>
            <Text
              style={{
                color: 'black',
                fontFamily: 'text-font-body',
                fontWeight: 800,
                fontSize: 50,
                textAlign: 'center',
              }}
            >
              Umum
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCustomerType(true)}>
            <Text
              style={{
                color: 'black',
                fontFamily: 'text-font-body',
                fontWeight: 800,
                fontSize: 50,
                textAlign: 'center',
              }}
            >
              Prioritas
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
}

export default Index;
