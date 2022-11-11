import { View, Text } from "react-native";
import MusicPlayer from "../../components/Music/MusicPlayer";
import { useEffect, useState } from "react";

export default function Song() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    fetch("https://iaudio.vercel.app/allimusics")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {isLoading ? <Text>loading...</Text> : <MusicPlayer songs={data} />}
    </View>
  );
}

// https://iaudio.vercel.app/allimusics
