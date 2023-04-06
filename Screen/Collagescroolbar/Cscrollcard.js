import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions,
    Pressable
} from "react-native";
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'
import Category from './Collagescroolbar'

const { height, width } = Dimensions.get('window')

export default function Cscrollcard() {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <ScrollView
                        scrollEventThrottle={16}
                    >
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 5 , paddingBottom:5 }}>
                            

                            <View style={{ height: 100, marginTop: 0 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Pressable onPress={() => {navigation.navigate('Dhakac')}}>
                                    <Category imageUri={require('../../assets/appicon.png')}
                                        name="ঢাকার কলেজ"
                                    />
                                    </Pressable>
                                    <Pressable onPress={() => {navigation.navigate('Chattogramc')}}>
                                    <Category imageUri={require('../../assets/appicon.png')}
                                        name="চট্রগ্রামের কলেজ"
                                    />
                                    </Pressable>
                                    <Pressable onPress={() => {navigation.navigate('Sylhetc')}}>
                                    <Category imageUri={require('../../assets/appicon.png')}
                                        name="সিলেটের কলেজ"
                                    />
                                    </Pressable>
                                    <Pressable onPress={() => {navigation.navigate('Khulnac')}}>
                                    <Category imageUri={require('../../assets/appicon.png')}
                                        name="খুলনার কলেজ"
                                    />
                                    </Pressable>
                                    <Pressable onPress={() => {navigation.navigate('Barishalc')}}>
                                    <Category imageUri={require('../../assets/appicon.png')}
                                        name="বরিশালের কলেজ"
                                    />
                                    </Pressable>
                                    <Pressable onPress={() => {navigation.navigate('Rajshahic')}}>
                                    <Category imageUri={require('../../assets/appicon.png')}
                                        name="রাজশাহীর কলেজ"
                                    />
                                    </Pressable>
                                    <Pressable onPress={() => {navigation.navigate('Rangpurc')}}>
                                    <Category imageUri={require('../../assets/appicon.png')}
                                        name="রংপুরের কলেজ"
                                    />
                                    </Pressable>
                                    <Pressable onPress={() => {navigation.navigate('Mymensinghc')}}>
                                    <Category imageUri={require('../../assets/appicon.png')}
                                        name="ময়মনসিংহের কলেজ"
                                    />
                                    </Pressable>
                                </ScrollView>
                            </View>
                            
                        </View>
                    </ScrollView>

                </View>
            </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});