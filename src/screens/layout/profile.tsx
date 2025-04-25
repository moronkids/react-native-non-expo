import ArrowDownWhite from '@/assets/img/arrow-down-white.svg';
import ArrowDown from '@/assets/img/arrow-down.svg';
import Branch from '@/assets/img/branch.svg';
import Location from '@/assets/img/location.svg';
import LogoutIconWhite from '@/assets/img/logout-white.svg';
import LogoutIcon from '@/assets/img/logout.svg';
import { DARK } from '@/helpers/constant/theme';
import { useGlobalContext } from '@/helpers/context';
import { THEME } from '@/types/theme';
import React, { useRef } from 'react';
import { Pressable, Text, View } from 'react-native';

const ArrowDownType = {
  light: <ArrowDown />,
  dark: <ArrowDownWhite />,
};

const LogoutIconType = {
  light: <LogoutIcon />,
  dark: <LogoutIconWhite />,
};

function Profile({ theme }: Readonly<{ theme: THEME }>) {
  const { isProfileShown, toggleProfile, setIsProfileShown, toggleLogoutPrompt } = useGlobalContext();
  const profileRef = useRef(null);
  return (
    <View
      testID={`profile-${theme}`}
      style={{
        position: 'absolute',
        top: 20,
        right: 40,
      }}
    >
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
          flexDirection: 'row',
          position: 'relative',
        }}
      >
        <View
          testID='wrapper'
          style={{
            width: 20,
            height: 20,
            borderRadius: 100,
            backgroundColor: theme === DARK ? '#E0AA3E' : '#E72D2A',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 600,
              fontSize: 12,
              color: 'white',
            }}
          >
            PI
          </Text>
        </View>
        <Pressable
          onPress={() => {
            setIsProfileShown(!isProfileShown);
          }}
          style={{
            zIndex: 999999999,
          }}
        >
          {ArrowDownType[theme]}
        </Pressable>
      </View>
      {/* button */}
      {isProfileShown && (
        <View
          ref={profileRef}
          testID='wrapper-1'
          style={{
            position: 'absolute',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: 348,
            height: 376,
            borderRadius: 24,
            backgroundColor: theme === DARK ? '#121516' : '#FDFDFD',
            boxShadow: '0px 4px 8px 2px #1018280F',
            zIndex: 6,
            right: 0,
            top: 30,
          }}
        >
          <View
            style={{
              height: 308,
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: 16,
              flexDirection: 'column',
              padding: 20,
              width: '100%',
              borderBottomColor: '#D9E1E4',
              borderBottomWidth: 1,
            }}
          >
            <View
              testID='wrapper-2'
              style={{
                width: 48,
                height: 48,
                borderRadius: 100,
                backgroundColor: theme === DARK ? '#E0AA3E' : '#E72D2A',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 600,
                  fontSize: 20,
                  color: 'white',
                }}
              >
                PI
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 4,
              }}
            >
              <Text
                testID='text-1'
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  textAlign: 'center',
                  color: theme === DARK ? '#FFFFFF' : '#303435',
                }}
              >
                KC Pondok Indah
              </Text>
              <Text
                style={{
                  fontWeight: 400,
                  fontSize: 14,
                  color: '#869094',
                  textAlign: 'center',
                }}
              >
                001416
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 24,
                width: '100%',
              }}
            >
              <Text
                testID='text-2'
                style={{
                  fontWeight: 600,
                  fontSize: 12,
                  color: theme === DARK ? '#C3CDD1' : '#869094',
                }}
              >
                Profil
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 8,
                }}
              >
                <View
                  style={{
                    position: 'relative',
                    width: 32,
                    height: 32,
                    backgroundColor: '#F5F5F7',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 100,
                  }}
                >
                  <Location
                    style={{
                      position: 'absolute',
                    }}
                  />
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4,
                  }}
                >
                  <Text
                    testID='text-3'
                    style={{
                      fontSize: 12,
                      color: theme === DARK ? '#C3CDD1' : '#869094',
                    }}
                  >
                    Nama kantor cabang
                  </Text>
                  <Text
                    testID='text-4'
                    style={{
                      fontSize: 14,
                      fontWeight: 400,
                      color: theme === DARK ? '#FDFDFD' : '#303435',
                    }}
                  >
                    Pondok Indah
                  </Text>
                </View>
              </View>
              <View
                style={{
                  gap: 8,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <View
                  style={{
                    position: 'relative',
                    width: 32,
                    height: 32,
                    backgroundColor: '#F5F5F7',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 100,
                    flexDirection: 'row',
                    gap: 8,
                  }}
                >
                  <Branch
                    style={{
                      position: 'absolute',
                    }}
                  />
                </View>
                <Text
                  style={{
                    color: theme === DARK ? '#FDFDFD' : '#869094',
                  }}
                >
                  PT Bank Sinarmas Tbk.
                </Text>
              </View>
            </View>
          </View>
          {/* container 1 */}
          <View
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              width: '100%',
              height: 68,
              padding: 24,
              gap: 16,
              flexDirection: 'row',
            }}
          >
            {LogoutIconType[theme]}
            <Pressable
              onPress={() => {
                toggleLogoutPrompt();
                toggleProfile();
              }}
            >
              <Text
                testID='text-5'
                style={{
                  color: theme === DARK ? '#FDFDFD' : '#303435',
                  fontSize: 14,
                  fontWeight: 400,
                }}
              >
                Keluar
              </Text>
            </Pressable>
          </View>
          {/* container 2 */}
        </View>
      )}
    </View>
  );
}

export default Profile;
