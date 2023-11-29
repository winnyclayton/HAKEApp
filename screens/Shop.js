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
import Icon from "react-native-vector-icons/Ionicons"; // Import Ionicons from the library
import "../assets/fonts/NeueMachina-Light.otf";
import "../assets/fonts/NeueMachina-Regular.otf";
import "../assets/fonts/NeueMachina-Ultrabold.otf";
import { AuthContext } from "../contexts/AuthContext";

export function Shop(props) {
  const [user, setUser] = useState();

  const Auth = useContext(AuthContext);

  useEffect(() => {
    if (Auth.currentUser) {
      setUser(Auth.currentUser);
    }
  }, [Auth]);

  const shopallData = [
    require("../assets/shopall/shopall_1.png"),
    require("../assets/shopall/shopall_2.png"),
    require("../assets/shopall/shopall_3.png"),
    require("../assets/shopall/shopall_4.png"),
    require("../assets/shopall/shopall_5.png"),
  ];

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => {
        // Navigate to the ArtistsDetail page with the selected artist's details
      }}
      style={styles.shopallItem}
    >
      <Image source={item} style={styles.shopallImage} />
      <View style={styles.shopallInfoContainer}>
        <Text style={styles.shopallTitle}>'Title'</Text>
        <Text style={styles.shopallPrice}>$7,100.00</Text>
      </View>
      <View style={styles.artistNameContainer}>
        <Text style={styles.shopallArtist}>Artist Name</Text>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.shopTitle}>Shop</Text>
        <Pressable style={styles.filterButton}>
          <Text style={styles.filterText}>shop all</Text>
          <Icon name="chevron-down-outline" size={18} color="black" />
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
  shopTitle: {
    fontSize: 26,
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
  shopallItem: {
    flex: 1,
    margin: 4,
    overflow: "hidden",
    padding: 5,
  },
  shopallImage: {
    flex: 1,
    width: "100%",
    height: 450,
    resizeMode: "cover",
  },
  shopallTitle: {
    textAlign: "left",
    marginTop: 15,
    fontSize: 18,
    fontFamily: "Neue-Light",
  },
  shopallArtist: {
    textAlign: "left",
    fontSize: 18,
    fontFamily: "Neue-Light",
  },
  shopallInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  artistNameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  shopallPrice: {
    fontSize: 18,
    fontFamily: "Neue-Light",
    color: "#black", // Adjust color as needed
  },
});