import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function MusicList({ api }) {
  const navigation = useNavigation();
  // console.log(api);
  const handelNavigate = () => {
    navigation.navigate("musicPlayer");
  };
  return (
    <View style={styles.container}>
      <Text>MusicList</Text>
      <FlatList
        data={api}
        renderItem={(item) => {
          console.log(item);
          return (
            <TouchableOpacity
              style={styles.button}
              onPress={handelNavigate(item?.item)}
            >
              <Text style={styles.title}>{item?.item.title}</Text>
              <Text style={styles.subTitle}>{item?.item.artist}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: StatusBar.currentHeight,
    padding: 10,
  },
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  artWorkWrapper: {
    width: 300,
    height: 340,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    borderRadius: 10,
  },
  title: {
    color: "#ffff",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 18,
    marginTop: 10,
    textTransform: "capitalize",
  },
  subTitle: {
    color: "#ffff",
    textAlign: "center",
    fontWeight: "300",
    fontSize: 15,
    textTransform: "capitalize",
  },
  button: {
    backgroundColor: "#000000",
    padding: 10,
    borderBottomWidth: 2,
    borderRadius: 10,
    borderColor: "#ffff",
  },
  //
});
