import React from "react";
import {
  View,
  Text,
  Pressable,
  TextInput,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import { useContext, useState, useEffect } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import "../assets/fonts/NeueMachina-Light.otf";
import "../assets/fonts/NeueMachina-Regular.otf";
import "../assets/fonts/NeueMachina-Ultrabold.otf";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigation } from "@react-navigation/native"; 


export function ArtistDetail(props) {
  const [user, setUser] = useState();

  const Auth = useContext(AuthContext);
  const navigation = useNavigation(); 

  useEffect(() => {
    if (Auth.currentUser) {
      setUser(Auth.currentUser);
    }
  }, [Auth]);

  const shopallData = [
    require("../assets/artists/representedartist_1.png"),
  ];

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => {
        //navigate to the artists works
      }}
      style={styles.artistItem}
    >
      <Image source={item} style={styles.artistImage} />
      <View style={styles.artistInfoContainer}>
        <Text style={styles.artistTitle}>ARTIST BIOGRAPHY / </Text>
        <Text style={styles.artistName}>TIARNA HERCZEG</Text>
      </View>
      <View style={styles.artistNameContainer}>
      <Pressable style={styles.viewAvWorkButton}>
          <Text style={styles.viewAvWorkButtonText}>View available work</Text>
        </Pressable></View>
        <View style={styles.artistBioContainer}>
        <Text style={styles.artistBioText}>Tiarna Herczeg completed her first solo exhibition with HAKE, ‘JUWA’ in June 2022.{'\n'}{'\n'}
        Tiarna Herczeg is a proud Kuku Yalanji and Hungarian living on Gadigal lands. Their mob’s land
        runs along the east coast of Far north QLD and includes the land and waters between Port Douglas
        and just South of Cooktown.{'\n'}{'\n'}
        Herczeg’s work is often understood with a comprehension of Indigenous, non western maps.</Text>
        </View>
      
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Pressable
          style={styles.backButton}
          onPress={() => navigation.navigate("Artists")}
        >
          <Icon name="chevron-back-outline" size={22} color="black" />
          <Text style={styles.backText}>Back to Represented Artists</Text>
        </Pressable>
      </View>
      <FlatList
        data={shopallData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={1}
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 18,
  },
  artistDetailTitle: {
    fontSize: 20,
    fontFamily: "Neue-Regular",
  },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  filterText: {
    fontFamily: "Neue-Light",
    fontSize: 18,
    textDecorationLine: "underline",
    marginRight: 5,
  },
  flatListContainer: {
    padding: 10,
  },
  artistItem: {
    flex: 1,
    margin: 4,
    overflow: "hidden",
    padding: 5,
  },
  artistImage: {
    flex: 1,
    width: "100%",
    height: 400,
    resizeMode: "cover",
  },
  artistTitle: {
    textAlign: "left",
    marginTop: 15,
    fontSize: 16,
    fontFamily: "Neue-Light",
  },
  artistName: {
    textAlign: "left",
    marginTop: 15,
    fontSize: 16,
    fontFamily: "Neue-Ultrabold",
  },
  shopallArtist: {
    textAlign: "left",
    fontSize: 18,
    fontFamily: "Neue-Light",
  },
  artistInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  artistBioContainer: {
    marginTop: 10,
  },
  artistNameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  artistBioText: {
    textAlign: "left",
    fontSize: 18,
    fontFamily: "Darker-Light",
    flexShrink: 1, //allow the text to shrink and wrap
    lineHeight: 20,
    color: "#585858",
    textAlign: "justify",
    hyphenationFactor: 0,
  },
  viewAvWorkButtonText: {
    color: "black",
    fontSize: 16,
    fontFamily: "Neue-Light",
  },
  viewAvWorkButton: {
    backgroundColor: "white",
    paddingTop: 15,
    paddingBottom: 15,
    flex: 1,
    borderWidth: 0.5,
    borderColor: "black",
    marginLeft: 5,
    alignItems: "center",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  backText: {
    fontFamily: "Neue-Light",
    fontSize: 18,
    marginRight: 5,
  },
});