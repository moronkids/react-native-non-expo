import { useNavigation } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';

function Index() {
    const { navigate } = useNavigation();
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
                Home Screen
            </Text>
            <Button title="details" onPress={() => navigate("Details" as never)} accessibilityLabel='test' />
        </View>
    );
}

export default Index;
