import { StyleSheet,  View , Text , Pressable } from 'react-native';
import { MaterialCommunityIcons , Ionicons , FontAwesome5 } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

export default function Main() {
    const navigation = useNavigation();
  return (
        <View>
            <View style={styles.container} >
      <Pressable onPress = {() => navigation.navigate('Song')} style={styles.textone}>
      <Ionicons name="md-musical-notes-outline" size={28} color="white" />
        <Text style={{color:'white'}}>islavo music</Text>
      </Pressable>
    </View>
    <View style={styles.container} >
      <Pressable onPress = {() => navigation.navigate('SongPremium')} style={styles.textone}>
      <MaterialCommunityIcons name="music-clef-treble" size={30} color="white" />
        <Text style={{color:'white'}}>islavo premium music</Text>
      </Pressable>
    </View>
    <View style={styles.container} >
    <Pressable onPress = {() => navigation.navigate('Show')} style={styles.textone}>
    <Ionicons name="ios-mic-outline" size={28} color="white" />
      <Text style={{color:'white'}}>islavo show</Text>
    </Pressable>
  </View>
  <View style={styles.container} >
    <Pressable onPress = {() => navigation.navigate('Artists')} style={styles.textone}>
    <FontAwesome5 name="user" size={24} color="white" />
      <Text style={{color:'white' , marginTop:5}}>islavo artists</Text>
    </Pressable>
  </View>
  <View style={styles.container} >
    <Pressable onPress = {() => navigation.navigate('About')} style={styles.textone}>
    <MaterialCommunityIcons name="dots-horizontal" size={28} color="white" />
      <Text style={{color:'white'}}>islavo about and contact</Text>
    </Pressable>
  </View>
        </View>
  );
}

const styles = StyleSheet.create({
    container: {
    flex:1,
    flexDirection:'column',
    marginTop:20,
  },
  textone: {
    alignItems:'center',
    borderColor:'white',
    borderWidth:1,
    paddingTop:10,
    paddingBottom:10,
    marginRight:20,
    marginLeft:20
  },
});