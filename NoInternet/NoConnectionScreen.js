import React from 'react';
import { StyleSheet, Text, View,Button, Image, Pressable } from 'react-native';
import HeaderTwo from '../Screen/HeaderTwo/HeaderTwo';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const NoConnectionScreen = (props) => {
  return (
    <View style={styles.container}>
        <MaterialCommunityIcons name="car-brake-alert" size={100} color="white" />
        <Pressable onPress={props.onCheck}><Text style={{color:'white' , fontSize:15, marginTop:5}}>Please connect internet</Text></Pressable>
    <HeaderTwo backBtn={true}/>
  </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:65
  },
});
export default NoConnectionScreen