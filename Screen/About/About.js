import { View, Text, Linking } from "react-native";
import Header from "../Header/Header";
import Headirtwo from "../HeaderTwo/HeaderTwo";
import { useNavigation } from "@react-navigation/native";
import ShareExample from "../Share/Share";
import { FontAwesome5 } from "@expo/vector-icons";

export default function About() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 75,
      }}
    >
      <Text style={{ color: "white", fontSize: 22 }}>about islavo</Text>
      <Text
        style={{
          color: "white",
          fontSize: 15,
          paddingRight: 15,
          paddingLeft: 15,
          textAlign: "center",
          marginTop: 10,
        }}
      >
        the islavo is islamic audio music and islamic audio musical show
        streaming app. where you can listen to islamic music and musical show
        freely. islavo officially launched on 19 may 2021. islavo mainly works
        with islamic musics and islamic musical shows. islavo's slogan is
        "islamic music is always".
      </Text>
      <Text
        style={{
          color: "white",
          fontSize: 12,
          marginTop: 5,
          textAlign: "center",
        }}
      >
        follow islavo
      </Text>
      <View style={{ flexDirection: "row", marginTop: 7, marginBottom: 1 }}>
        <Text
          style={{ color: "white", fontSize: 17 }}
          onPress={() =>
            Linking.openURL("https://www.facebook.com/islavoofficial")
          }
        >
          <FontAwesome5 name="facebook-square" size={20}></FontAwesome5>
        </Text>
        <Text
          style={{ color: "white", fontSize: 17, marginLeft: 5 }}
          onPress={() =>
            Linking.openURL("https://www.youtube.com/islavoofficial")
          }
        >
          <FontAwesome5 name="youtube-square" size={20}></FontAwesome5>
        </Text>
      </View>
      <Text
        style={{
          color: "white",
          fontSize: 12,
          marginTop: 5,
          textAlign: "center",
        }}
      >
        email: islavo.info@gmail.com
      </Text>
      {/* <Text
        style={{
          color: "white",
          fontSize: 12,
          textAlign: "center",
          alignItems: "center",
        }}
        onPress={() => navigation.navigate("Privecy")}
      >
        {" "}
        privacy policy for islavo{" "}
      </Text> */}
      <Text
        style={{
          color: "white",
          fontSize: 10,
          marginTop: -0,
          textAlign: "center",
        }}
      >
        ©islavo
      </Text>
      <ShareExample />
      <Headirtwo backBtn={true} />
    </View>
  );
}
