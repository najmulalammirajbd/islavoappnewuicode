import { StyleSheet, Image , View } from 'react-native';

export default function Baner() {
  return (
    <View >
      <Image
        style={styles.baner}
        source={require('../../assets/miraj.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  baner: {
    width:'100%',
    height:220,
    alignItems:'flex-start',
    marginTop:10
  },
});