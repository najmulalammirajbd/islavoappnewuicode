import { View,  Text , Pressable } from 'react-native';
import HeaderTwo from '../HeaderTwo/HeaderTwo';
import { MaterialCommunityIcons , Ionicons , FontAwesome5 } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import Header from '../Header/Header';

export default function Artists() {
  const navigation = useNavigation();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , marginTop: 30  }}>
            <View style={{flexDirection:'row'}}>
            <Pressable onPress = {() => navigation.navigate('Song')} style={{alignItems:'center',borderColor:'white',borderWidth:1,paddingTop:10,paddingBottom:10,marginRight:5,marginLeft:5,width:'45%' , marginBottom:7, flexDirection:'column', borderTopLeftRadius:25 }} >
            <Ionicons name="md-musical-notes-outline" size={28} color="white" />
            <Text style={{ color: 'white', fontSize: 15}}>music</Text>
            </Pressable>
            <Pressable onPress = {() => navigation.navigate('SongPremium')} style={{alignItems:'center',borderColor:'white',borderWidth:1,paddingTop:10,paddingBottom:10,marginRight:5,marginLeft:5,width:'45%' , marginBottom:7, flexDirection:'column' , borderTopRightRadius:25 }}>
            <MaterialCommunityIcons name="music-clef-treble" size={30} color="white" />
            <Text style={{ color: 'white', fontSize: 15}}>premium music</Text>
            </Pressable>
            </View>
            <Header/>
            <MaterialCommunityIcons onPress = {() => navigation.navigate('About')} name="dots-horizontal" size={45} color="white" />
            <View style={{flexDirection:'row'}}>
            <Pressable onPress = {() => navigation.navigate('Show')} style={{alignItems:'center',borderColor:'white',borderWidth:1,paddingTop:10,paddingBottom:10,marginRight:5,marginLeft:5,width:'45%' , marginBottom:7, flexDirection:'column', borderBottomLeftRadius: 25}} >
            <Ionicons name="ios-mic-outline" size={28} color="white" />
            <Text style={{ color: 'white', fontSize: 15}}>islavo show</Text>
            </Pressable>
            <Pressable onPress = {() => navigation.navigate('Artists')} style={{alignItems:'center',borderColor:'white',borderWidth:1,paddingTop:10,paddingBottom:10,marginRight:5,marginLeft:5,width:'45%' , marginBottom:7, flexDirection:'column' , borderBottomRightRadius: 25 }}>
            <FontAwesome5 name="user" size={24} color="white" />
            <Text style={{ color: 'white', fontSize: 15 , marginTop:5}}>artist</Text>
            </Pressable>
            </View>
            {/* <Pressable  style={{alignItems:'center',paddingTop:5,paddingBottom:0,marginRight:20,marginLeft:20,width:'93%' , marginBottom:0 , borderRadius: 3}}> */}
            
            {/* <Text style={{ color: 'white', fontSize: 15}}>islavo about and contact</Text> */}
            {/* </Pressable> */}
        </View>
    );
}