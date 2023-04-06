import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

class Collagescroolbar extends Component {
    render() {
        return (
            <View style={{ height: 100, width: 130, marginLeft: 5, borderWidth: 0.5, borderColor: '#dddddd' , marginRight:5 }}>
                <View style={{ flex: 2 }}>
                    <Image source={this.props.imageUri}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'contain' }}
                    />
                </View>
                <View style={{ flex: 1, paddingLeft: 0, paddingTop: 10  }}>
                    <Text style={{ fontSize:10 , textAlign:'center'}}>{this.props.name}</Text>
                </View>
            </View>
        );
    }
}
export default Collagescroolbar;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});