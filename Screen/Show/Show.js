import { View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import HeaderTwo from "../HeaderTwo/HeaderTwo";
import MusicPlayer from "../../components/Music/MusicPlayer";
import { useEffect, useState } from "react";

export default function Show() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    fetch("https://iaudio.vercel.app/allishows")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {isLoading ? <Text>Loading.......</Text> : <MusicPlayer songs={data} />}
    </View>
  );
}

const songs = [
  {
    _id: "6369e67b80e9edac2a5e0df7",
    title: "islavo show । ep: 01",
    artist: "guest: mamunur rashid , sobujkuri",
    url: "https://islavoshow.netlify.app/songs/music-1.mp3",
    serialnumber: "1",
  },
];
