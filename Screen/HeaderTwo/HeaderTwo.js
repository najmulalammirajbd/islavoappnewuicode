import { StyleSheet, Image , View, Pressable } from 'react-native';
import { AntDesign , Ionicons } from '@expo/vector-icons'; 
import {useNavigation} from '@react-navigation/native';

export default function Headirtwo({backBtn}) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      { backBtn && (
         <Pressable onPress={()=> {navigation.goBack()}}>
          <Ionicons name="ios-caret-back" size={24} color="white" />
         </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    flexDirection:'row',
    alignItems:'center' ,
    marginTop: 6
  },
  logo: {
    width:110,
    height:100,
    alignItems:'flex-start',
    marginBottom:0,
    resizeMode:'contain'
  },
});