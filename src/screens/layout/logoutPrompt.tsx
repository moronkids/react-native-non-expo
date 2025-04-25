import { DARK } from '@/helpers/constant/theme';
import { useGlobalContext } from '@/helpers/context';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';

function LogoutPrompt({ theme }: Readonly<{ theme: string }>) {
  const navigation = useNavigation();
  const { logoutPromptIsActive, toggleLogoutPrompt } = useGlobalContext();
  return (
    <>
      {logoutPromptIsActive && (
        <>
          <TouchableOpacity
            testID='overlay-bg'
            onPress={toggleLogoutPrompt}
            style={{
              height: '100%',
              width: '100%',
              backgroundColor: '#15243340',
              position: 'absolute',
              top: 0,
              zIndex: 5,
            }}
          />
          <View
            style={{
              backgroundColor: theme === DARK ? '#121516' : '#FDFDFD',
              borderRadius: 20,
              width: 488,
              height: 220,
              padding: 24,
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: [{ translateX: -244 }, { translateY: -110 }],
              zIndex: 999999999,
              boxShadow: '0px 2px 4px -2px #1018280F',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <View
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: 8,
              }}
            >
              <Text
                style={{
                  fontWeight: 600,
                  fontSize: 20,
                  color: theme === DARK ? '#FDFDFD' : '#303435',
                }}
              >
                Keluar dari Sistem Antrean?
              </Text>
              <Text
                style={{
                  fontWeight: 400,
                  fontSize: 14,
                  color: theme === DARK ? '#FDFDFD' : '#303435',
                }}
              >
                Anda perlu masuk menggunakan kode cabang kembali untuk menggunakan Sistem Antrean.
              </Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
              <Pressable
                style={{
                  borderColor: theme === DARK ? 'unset' : '#E72D2A',
                  borderWidth: 2,
                  borderRadius: 32,
                  padding: 17,
                  backgroundColor: theme === DARK ? '#FDFDFD' : 'unset',
                  zIndex: 1000,
                  flex: 1,
                  marginRight: 10,
                }}
                onPress={toggleLogoutPrompt}
              >
                <Text
                  style={{
                    textAlign: 'center',
                    color: theme === DARK ? 'black' : '#E42418',

                    fontSize: 16,
                  }}
                >
                  Kembali
                </Text>
              </Pressable>
              <Pressable
                style={{
                  backgroundColor: theme === DARK ? '#E0AA3E' : '#E72D2A',
                  borderRadius: 32,
                  padding: 17,
                  zIndex: 1000,
                  flex: 1,
                }}
                testID='logout-button'
                onPress={() => {
                  (navigation.navigate as (name: string, params?: object) => void)('Regist', {});
                  toggleLogoutPrompt();
                }}
              >
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#fff',
                    fontSize: 16,
                  }}
                >
                  Keluar
                </Text>
              </Pressable>
            </View>
          </View>
        </>
      )}
    </>
  );
}

export default LogoutPrompt;
