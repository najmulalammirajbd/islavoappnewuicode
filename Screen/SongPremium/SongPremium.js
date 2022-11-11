import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import MusicPlayer from "../../components/Music/MusicPlayer";

export default function SongPremium() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    fetch("https://iaudio.vercel.app/alliprimiums")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {isLoading ? <Text>Loading.....</Text> : <MusicPlayer songs={songs} />}
    </View>
  );
}

const songs = [
  {
    _id: "6369e74080e9edac2a5e0df8",
    title: "mone lage bhoy go allah",
    artist: "sheikh afzal hussain sadi",
    url: "https://islavosong.netlify.app/songs/music-000.mp3",
    serialnumber: "1",
  },
];
