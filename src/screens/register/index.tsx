import LogoRegister from '@/assets/img/Logo.svg';
import { LIGHT } from '@/helpers/constant/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Pressable, StyleProp, StyleSheet, Text, TextInput, TextStyle, View } from 'react-native';
import Layout from '../layout';

function Index() {
  const navigation = useNavigation();
  const { control, handleSubmit, formState } = useForm({
    defaultValues: {
      branchCode: '',
    },
    reValidateMode: 'onChange',
  });
  const [branchCode, setBranchCode] = useState('');

  const setCustomerType = async (isPriority: boolean) => {
    try {
      await AsyncStorage.setItem('isPriority', String(isPriority));
      navigation.dispatch(StackActions.push('Home', { branchCode }));
    } catch {
      throw Error('Failed to set customer type');
    }
  };
  const onSubmit = (data: { branchCode: string }) => {
    if (data.branchCode === 'PRIO') {
      setCustomerType(true);
    } else if (data.branchCode === 'SIMAS') {
      setCustomerType(false);
    }
  };
  const inputStyle: StyleProp<TextStyle> = StyleSheet.flatten([
    {
      width: '100%',
      height: 48,
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 15,
      fontSize: 14,
      borderColor: '#D9E1E4',
      fontFamily: 'text-font-body',
    },
    formState?.errors?.branchCode && {
      borderColor: 'red',
    },
  ]);

  return (
    <Layout theme={LIGHT}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: 520,
            height: 399,
            gap: 20,
            backgroundColor: '#FAFBFBCC',
            borderRadius: 22,
            boxShadow: '0px 4px 6px -2px #10182808',
            padding: 40,
          }}
        >
          <View>
            <LogoRegister width={135} />
          </View>

          <View
            style={{
              display: 'flex',
              width: '100%',
              height: 'auto',
              gap: 24,
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 28,
                  fontWeight: 600,
                  textAlign: 'center',
                }}
              >
                Sistem Antrian
              </Text>
            </View>

            <View
              style={{
                display: 'flex',
                gap: 8,
                position: 'relative',
              }}
            >
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: 14,
                }}
              >
                Kode Cabang
              </Text>
              <Controller
                control={control}
                name='branchCode'
                rules={{
                  required: 'Kode cabang tidak valid',
                }}
                render={({ field }) => (
                  <TextInput
                    style={inputStyle}
                    value={branchCode}
                    onChangeText={(value) => {
                      setBranchCode(value);
                      field.onChange(value);
                    }}
                    placeholder='Masukkan kode cabang'
                    placeholderTextColor='#999'
                  />
                )}
              />
              {formState?.errors?.branchCode && (
                <View
                  style={{
                    position: 'absolute',
                    bottom: -25,
                  }}
                >
                  <Text style={{ color: 'red', fontSize: 14 }}>{formState.errors.branchCode.message}</Text>
                </View>
              )}
            </View>
            <Pressable
              style={{
                marginTop: 16,
                backgroundColor: '#E72D2A',
                borderRadius: 32,
                padding: 17,
                zIndex: 1000,
              }}
              onPress={handleSubmit(onSubmit)}
            >
              <Text
                style={{
                  textAlign: 'center',
                  color: '#fff',
                  fontSize: 16,
                }}
              >
                Masuk
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Layout>
  );
}

export default Index;
