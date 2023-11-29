import React, { useContext, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Image,
} from "react-native";
import { AuthContext } from "../contexts/AuthContext";

export function Artists(props) {
  const [user, setUser] = useState();
  const Auth = useContext(AuthContext);

  useEffect(() => {
    if (Auth.currentUser) {
      setUser(Auth.currentUser);
    }
  }, [Auth]);

  const artistsData = [
    require("../assets/artists/representedartist_1.png"),
    require("../assets/artists/representedartist_2.png"),
    require("../assets/artists/representedartist_3.png"),
    require("../assets/artists/representedartist_4.png"),
    require("../assets/artists/representedartist_5.png"),
    require("../assets/artists/representedartist_6.png"),
    require("../assets/artists/representedartist_7.png"),
    require("../assets/artists/representedartist_8.png"),
  ];

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => {
        // Navigate to the ArtistsDetail page with the selected artist's details
      }}
      style={styles.artistItem}
    >
      <Image source={item} style={styles.artistImage} />
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.artistsTitle}>Represented Artists</Text>
      <FlatList
        data={artistsData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2} //2 columns for mobile view
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDF9EE",
  },
  artistsTitle: {
    paddingTop: 18,
    paddingLeft: 18,
    fontSize: 26,
    fontFamily: "Neue-Regular",
  },
  flatListContainer: {
    padding: 10,
  },
  artistItem: {
    flex: 1,
    margin: 4,
    aspectRatio: 1, // maintain a square aspect ratio for each item
    overflow: "hidden",
    padding: 5,
  },
  artistImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
