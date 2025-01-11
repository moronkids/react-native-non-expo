import React from 'react';
import { Text, View } from 'react-native';

function Index() {
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
