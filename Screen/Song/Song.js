import { View, Text , Image } from "react-native";
import MusicPlayer from "../../components/Music/MusicPlayer";
import { useEffect, useState } from "react";
import {checkConnected} from '../../NoInternet/functions';
import NoConnectionScreen from "../../NoInternet/NoConnectionScreen";

export default function Song() {
  const [connectStatus,setConnectStatus] = useState(false)
  checkConnected().then(res=>{
    setConnectStatus(res)
  })
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
    connectStatus?
    (<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    {isLoading ? <Image style={{height:120, width:150}} source={require('../../assets/appicon.png')} /> : <MusicPlayer songs={data} />}
  </View>):(
        <NoConnectionScreen onCheck={checkConnected}/>
      )
  );
}

// https://iaudio.vercel.app/allimusics
