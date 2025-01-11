import { StackActions, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

function Index() {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.dispatch(StackActions.replace('Home'));
        }, 500);
    }, [navigation]);
    return (
        <View style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
        }}>
            <Text style={{
                textAlign: 'center',
            }}>
                Splash Screen
            </Text>
        </View>
    );
}

export default Index;
