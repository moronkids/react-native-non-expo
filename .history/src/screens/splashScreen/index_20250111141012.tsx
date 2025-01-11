import { StackActions } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Alert, Text, View } from 'react-native';

function Index() {

    useEffect(() => {
        setTimeout(() => {
            StackActions.replace('Home');
        }, 500);
    }, []);
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
