import { StyleSheet, Image , View, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import {useNavigation} from '@react-navigation/native';

export default function Headirtwo({backBtn}) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      { backBtn && (
         <Pressable onPress={()=> {navigation.goBack()}}>
          <AntDesign name="leftcircle" size={24} color="white" />
         </Pressable>
      )}
      <Image
        style={styles.logo}
        source={require('../../assets/appicon.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    flexDirection:'row',
    alignItems:'center'
  },
  logo: {
    width:110,
    height:100,
    alignItems:'flex-start',
    marginBottom:0,
    resizeMode:'contain'
  },
});