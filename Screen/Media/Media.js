import { StyleSheet, Text, View, Linking } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons'

export default function Media() {
    const navigation = useNavigation();
    return (
        <View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , marginTop:10 , flexDirection:'row' }}>
            <Text style={{ color: 'white', fontSize: 10 , marginRight:5 }}>follow islavo</Text>
            <View style={{ flexDirection: 'row', marginTop: 7, marginBottom: 5 }}>
                <Text style={{ color: 'white', fontSize: 17 }}
                    onPress={() => Linking.openURL('https://www.facebook.com/islavoofficial')}><FontAwesome5
                        name="facebook-square"
                        size={30}
                    ></FontAwesome5></Text>
                <Text style={{ color: 'white', fontSize: 17, marginLeft: 5 }}
                    onPress={() => Linking.openURL('https://www.youtube.com/islavoofficial')}><FontAwesome5
                        name="youtube-square"
                        size={30}
                    ></FontAwesome5></Text>
            </View>
        </View>
        <Text style={{ color: 'white', fontSize: 10 , textAlign:'center' , alignItems:'center' , marginBottom:5  }}
        onPress = {() => navigation.navigate('Privecy')}> privacy policy for islavo </Text>
        <Text style={{ color: 'white', fontSize: 14 ,  textAlign:'center' , marginBottom:15 , }}>©islavo</Text>
        </View>


    );
}