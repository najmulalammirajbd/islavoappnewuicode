import { View, Text, Pressable, Image, Linking , StyleSheet , TouchableOpacity} from 'react-native'
import {
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome5,
} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import {Card} from 'react-native-shadow-cards';

export default function Baner() {
  return (
    <View>
      <Image style={styles.baner} source={require('../../assets/miraj.png')} />
      <View style={{ flexDirection: 'row' , marginBottom:100 , position:'absolute' , marginTop:186}}>
        <Card style={{
            justifyContent: 'center',
            width:'92%',
            marginLeft:14,
            marginRight:15,
            height:70
          }}>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            paddingTop: 10,
            paddingBottom: 10,
            width: '100%',
            marginBottom: 3,
          }}
        >
          <Text style={{ color: 'black' , fontSize:12 }}>islamic music is always</Text>
        </TouchableOpacity>
        </Card>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  baner: {
    width: '100%',
    height: 220,
    alignItems: 'flex-start',
    marginTop: 0,
    marginBottom:45
    
  },
})
