import { View,  Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import HeaderTwo from '../HeaderTwo/HeaderTwo';

export default function Song() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <FontAwesome5 name="user" size={24} color="white" />
            <Text style={{ color: 'white', fontSize: 25 }}>islavo music</Text>
            <HeaderTwo backBtn={true}/>
        </View>
    );
}