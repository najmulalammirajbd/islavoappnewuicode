import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Modal,
  TextInput,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Audio } from "expo-av";
import { useNavigation } from "@react-navigation/native";

//   get window
const { width, height } = Dimensions.get("window");

export default function MusicPlayer({ songs }) {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  // music
  const [songIndex, setSongIndex] = useState(0);
  const [status, setStatus] = useState({});
  const [loaded, setLoaded] = React.useState(false);
  const sound = React.useRef(new Audio.Sound()).current;
  const [next, setNext] = useState(false);
  const [Name, setName] = useState("");
  const [artistName, setArtistName] = useState("");

  React.useEffect(() => {
    // console.log("replay1");
    sound
      .loadAsync({
        uri: songs[songIndex].url,
      })
      .then(() => {
        // console.log("done......");
        setName(songs[songIndex].title);
        setArtistName(songs[songIndex].artist);
        setLoaded(false);
        sound.setOnPlaybackStatusUpdate((status) => {
          // console.log("status", status);
          // console.log("replay2");
          setStatus(status);
        });
      });
    return () => {
      sound.unloadAsync();
      // console.log("loding......");
      setLoaded(true);
    };
  }, [next]);
  // didJustFinish
  const play = () => {
    sound.playAsync();
  };
  const pause = () => {
    sound.pauseAsync();
  };
  const replayAsync = () => {
    sound.replayAsync();
  };
  // console.log("check", status);
  const millisToMinutesAndSeconds = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    //ES6 interpolated literals/template literals
    //If seconds is less than 10 put a zero in front.
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  //
  const skipToNext = (index) => {
    setNext(!next);
    replayAsync();
    setSongIndex(index + 1);
  };
  const selectSong = (index) => {
    setNext(!next);
    replayAsync();
    setSongIndex(index - 1);
  };
  //
  const skipToPrevious = (index) => {
    setNext(!next);
    replayAsync();
    setSongIndex(index - 1);
  };
  let n = 0;
  // Model filtering
  const [searchSongs, setSearchSongs] = useState(songs);
  // handel search
  const handelSearchInputValue = (value) => {
    searchFilter(value);
  };
  useEffect(() => {
    setSearchSongs(songs);
  }, [modalVisible]);
  // ck
  const searchFilter = (value) => {
    if (songs?.length > 0) {
      let filterList = songs?.filter((item) => {
        const itemName = item.title?.toLowerCase();
        const userTypeText = value?.toLowerCase();
        return itemName.indexOf(userTypeText) > -1;
      });
      if (value.length > 0) {
        setSearchSongs(filterList);
      }
    }
    if (value.length < 1) {
      setSearchSongs(songs);
    }
  };

  useEffect(() => {
    play();
  }, [loaded]);

  return (
    <SafeAreaView style={styles.container}>
      {/* modal */}
      <StatusBar style="light" backgroundColor="#000000" />
      <>
        <Modal animationType="slide" visible={modalVisible}>
          <View style={styles.modalContainer}>
            <View style={styles.playlistContainerModal}>
              <Text style={styles.playlistContainerModalText}>List</Text>
              <View>
                <TextInput
                  style={styles.searchInputStyle}
                  placeholder={"Search .."}
                  placeholderTextColor={"#ddd"}
                  onChangeText={(item) => {
                    handelSearchInputValue(item);
                  }}
                />
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Ionicons name="close" size={32} color="#ffffff" />
              </TouchableOpacity>
            </View>
            {/* flat list */}
            <FlatList
              data={searchSongs}
              renderItem={(item, index) => {
                n += 1;
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setSongIndex(item?.item.serialnumber);
                      setModalVisible(!modalVisible);
                      selectSong(item?.item.serialnumber);
                    }}
                    style={[
                      styles.listButton,
                      songs?.length === n && { borderBottomColor: "#000000" },
                    ]}
                    activeOpacity={0.8}
                  >
                    <Image
                      source={require("../../assets/icon.png")}
                      style={styles.listImageIcon}
                    />
                    <View>
                      <Text style={styles.listTextTitle}>
                        {item?.item?.title}
                      </Text>
                      <Text style={styles.listTextArtist}>
                        {item?.item?.artist}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </Modal>
      </>
      {/* main contained   */}
      <>
        <View style={styles.playlistContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="ios-arrow-back-sharp" size={35} color="#ffffff" />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <MaterialCommunityIcons
              name="playlist-music"
              size={35}
              color="#ffffff"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.mainContainer}>
          {/* image flat list  */}
          <View
            style={{
              width: width,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={styles.artWorkWrapper}>
              <Image
                source={require("../../assets/icon.png")}
                style={styles.image}
              />
            </View>
          </View>
          <View>
            <Text style={styles.title}>{Name}</Text>
            <Text style={styles.subTitle}>{artistName}</Text>
          </View>
          <View>
            <View style={styles.progressLabelContainer}>
              <Text style={styles.progressLabelText}>
                {status?.durationMillis == undefined
                  ? "0:00"
                  : millisToMinutesAndSeconds(status?.positionMillis)}
              </Text>
              <Text style={styles.progressLabelText}>
                {status?.durationMillis == undefined
                  ? "0:00"
                  : millisToMinutesAndSeconds(status?.durationMillis)}
              </Text>
            </View>
          </View>
          <View style={styles.musicController}>
            <TouchableOpacity
              onPress={() => skipToPrevious(songIndex)}
              activeOpacity={0.5}
              disabled={songIndex <= 0 ? true : false}
            >
              <Ionicons
                name="play-skip-back-outline"
                size={35}
                color="#ffffff"
              />
            </TouchableOpacity>
            {!loaded ? (
              <>
                {status?.isPlaying == true ? (
                  <TouchableOpacity onPress={pause} activeOpacity={0.5}>
                    <Ionicons
                      name={"ios-pause-circle"}
                      size={75}
                      color="#ffffff"
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={play} activeOpacity={0.5}>
                    <Ionicons
                      name={"play-circle-sharp"}
                      size={75}
                      color="#ffffff"
                    />
                  </TouchableOpacity>
                )}
              </>
            ) : (
              <TouchableOpacity activeOpacity={0.5}>
                <Ionicons name={"ios-pause-circle"} size={75} color="#ffffff" />
              </TouchableOpacity>
            )}

            <TouchableOpacity
              onPress={() => skipToNext(songIndex)}
              activeOpacity={0.5}
              disabled={songs?.length == songIndex + 1 ? true : false}
            >
              <Ionicons
                name="play-skip-forward-outline"
                size={35}
                color="#ffffff"
              />
            </TouchableOpacity>
          </View>
        </View>
      </>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: StatusBar.currentHeight,
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
    // textTransform: "capitalize",
  },
  subTitle: {
    color: "#ffff",
    textAlign: "center",
    fontWeight: "300",
    fontSize: 15,
    // textTransform: "capitalize",
  },
  progressContainer: {
    width: 350,
    height: 40,
    marginTop: 25,
    flexDirection: "row",
    alignSelf: "center",
  },
  //
  progressLabelContainer: {
    width: 310,
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    paddingVertical: 50,
  },
  progressLabelText: {
    color: "white",
  },
  //
  musicController: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "80%",
  },
  spinner: {
    backgroundColor: "#ffff",
    borderRadius: 50,
    padding: 1,
  },
  //playlistContainer
  playlistContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    borderBottomColor: "#fff",
  },

  // Modal Container
  playlistContainerModal: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 3,
    alignItems: "center",
    borderBottomWidth: 3,
    borderBottomColor: "#fff",
  },
  playlistContainerModalText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },
  modalContainer: {
    backgroundColor: "#000000",
    flex: 1,
  },
  listButton: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#959595",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  listTextTitle: {
    color: "#ffffff",
    fontSize: 20,
    marginLeft: 20,
    // textTransform: "capitalize",
    fontWeight: "500",
    width: width / 1.5,
  },
  listTextArtist: {
    color: "#ffffff",
    fontSize: 14,
    marginLeft: 20,
    // textTransform: "capitalize",
    fontWeight: "400",
    width: width / 1.5,
  },
  listImageIcon: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  searchInputStyle: {
    // backgroundColor: "#ef1515",
    color: "#ffff",
    width: width / 2,
    padding: 5,
    borderRadius: 10,
  },
});
