import { View,  Text , Pressable } from 'react-native';
import HeaderTwo from '../HeaderTwo/HeaderTwo';
import { MaterialCommunityIcons , Ionicons , FontAwesome5 } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import Header from '../Header/Header';

export default function Artists() {
  const navigation = useNavigation();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'  }}>
          <Header/>
            <Pressable onPress = {() => navigation.navigate('Song')} style={{alignItems:'center',borderColor:'white',borderWidth:1,paddingTop:10,paddingBottom:10,marginRight:20,marginLeft:20,width:'90%' , marginBottom:7}}>
            <Ionicons name="md-musical-notes-outline" size={28} color="white" />
            <Text style={{ color: 'white', fontSize: 15}}>islavo music</Text>
            </Pressable>
            <Pressable onPress = {() => navigation.navigate('SongPremium')} style={{alignItems:'center',borderColor:'white',borderWidth:1,paddingTop:10,paddingBottom:10,marginRight:20,marginLeft:20,width:'90%' , marginBottom:7}}>
            <MaterialCommunityIcons name="music-clef-treble" size={30} color="white" />
            <Text style={{ color: 'white', fontSize: 15}}>islavo premium music</Text>
            </Pressable>
            <Pressable onPress = {() => navigation.navigate('Show')} style={{alignItems:'center',borderColor:'white',borderWidth:1,paddingTop:10,paddingBottom:10,marginRight:20,marginLeft:20,width:'90%' , marginBottom:7}}>
            <Ionicons name="ios-mic-outline" size={28} color="white" />
            <Text style={{ color: 'white', fontSize: 15}}>islavo show</Text>
            </Pressable>
            <Pressable onPress = {() => navigation.navigate('Artists')} style={{alignItems:'center',borderColor:'white',borderWidth:1,paddingTop:10,paddingBottom:10,marginRight:20,marginLeft:20,width:'90%' , marginBottom:7}}>
            <FontAwesome5 name="user" size={24} color="white" />
            <Text style={{ color: 'white', fontSize: 15}}>islavo artists</Text>
            </Pressable>
            <Pressable onPress = {() => navigation.navigate('About')} style={{alignItems:'center',borderColor:'white',borderWidth:1,paddingTop:10,paddingBottom:10,marginRight:20,marginLeft:20,width:'90%' , marginBottom:7}}>
            <MaterialCommunityIcons name="dots-horizontal" size={28} color="white" />
            <Text style={{ color: 'white', fontSize: 15}}>islavo about and contact</Text>
            </Pressable>
        </View>
    );
}