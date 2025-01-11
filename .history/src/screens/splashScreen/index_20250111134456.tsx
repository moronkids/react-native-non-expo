import React from 'react';
import { Text, View } from 'react-native';

function Index() {
    return (
        <View style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
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
