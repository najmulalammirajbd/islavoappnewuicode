import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import MusicPlayer from "../../components/Music/MusicPlayer";
import {checkConnected} from '../../NoInternet/functions';
import NoConnectionScreen from "../../NoInternet/NoConnectionScreen";

export default function SongPremium() {
  const [connectStatus,setConnectStatus] = useState(false)
  checkConnected().then(res=>{
    setConnectStatus(res)
  })
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
    connectStatus?
    (<View style={{ flex: 1 }}>
      {isLoading ? <Text>Loading.....</Text> : <MusicPlayer songs={data} />}
    </View>):(
        <NoConnectionScreen onCheck={checkConnected}/>
      )
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
