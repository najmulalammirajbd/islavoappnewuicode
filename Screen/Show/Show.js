import { View, Text , Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import HeaderTwo from "../HeaderTwo/HeaderTwo";
import MusicPlayer from "../../components/Music/MusicPlayer";
import { useEffect, useState } from "react";
import {checkConnected} from '../../NoInternet/functions';
import NoConnectionScreen from "../../NoInternet/NoConnectionScreen";

export default function Show() {
  const [connectStatus,setConnectStatus] = useState(false)
  checkConnected().then(res=>{
    setConnectStatus(res)
  })
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
    connectStatus?
    (<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {isLoading ? <Image style={{height:120, width:150}} source={require('../../assets/appicon.png')} /> : <MusicPlayer songs={data} />}
    </View>):(
        <NoConnectionScreen onCheck={checkConnected}/>
      )
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
