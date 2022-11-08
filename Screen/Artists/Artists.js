import { View,  Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import HeaderTwo from '../HeaderTwo/HeaderTwo';

export default function Artists() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <FontAwesome5 name="user" size={24} color="white" />
            <Text style={{ color: 'white', fontSize: 25 }}>artists</Text>
            <Text style={{ color: 'white', fontSize: 17 }}>mamunur rashid</Text>
            <Text style={{ color: 'white', fontSize: 17 }}>sheikh afzal hussain sadi</Text>
            <Text style={{ color: 'white', fontSize: 17 }}>sadikur rahman</Text>
            <Text style={{ color: 'white', fontSize: 17 }}>mushir alom mijan</Text>
            <Text style={{ color: 'white', fontSize: 17 }}>sayeem ahmod emon</Text>
            <Text style={{ color: 'white', fontSize: 17 }}>abdullah al farhan</Text>
            <HeaderTwo backBtn={true}/>
        </View>
    );
}