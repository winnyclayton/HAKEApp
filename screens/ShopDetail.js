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

export function ShopDetail(props) {
  const [user, setUser] = useState();

  const Auth = useContext(AuthContext);
  const navigation = useNavigation();

  useEffect(() => {
    if (Auth.currentUser) {
      setUser(Auth.currentUser);
    }
  }, [Auth]);

  const shopallData = [
    require("../assets/shopall/shopall_1.png"),
  ];

  const renderItem = ({ item }) => (
    <View style={styles.shopallItem}>
      <Image source={item} style={styles.shopallImage} />
      <View style={styles.shopallInfoContainer}>
        <Text style={styles.shopallTitle}>'Charcoal Run #1'</Text>
        <Text style={styles.shopallPrice}>$7,100.00</Text>
      </View>
      <View style={styles.artistNameContainer}>
        <Text style={styles.shopallArtist}>Ash Holmes</Text>
      </View>
      <View style={styles.purchaseContainer}>
        <Pressable style={styles.addToCartButton}>
          <Text style={styles.addToCartButtonText}>Add to cart</Text>
        </Pressable>
        <Text style={styles.artMoneyText}>
          $7,100 or 10 monthly installments of $710 with Art Money
        </Text>
        </View>
        <View style={styles.artworkDetailsContainer}>
          <Text style={styles.detailsTitle}>Details</Text>
          <View style={styles.horizontalLine} /> 
          <Text style={styles.detailsParagraph}>
          By Ash Holmes - ‘Charcoal Run #1’{'\n'}{'\n'}
          120cm x 170cm{'\n'}{'\n'}
          Oil, acrylic on canvas, framed in Tasmanian Oak.{'\n'}{'\n'}
          This piece is an original by Ash Holmes for her body of work ‘home for a while’, created in 2023.{'\n'}{'\n'}
          Please find shipping information for this piece, or please enquire here.{'\n'}{'\n'}
          We are delighted to be partnering with Art Money as an additional check out option. For questions regarding this process please reach out here.
          </Text>
          </View>
    </View>
  );


  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Pressable
          style={styles.backButton}
          onPress={() => navigation.navigate("Shop")}
        >
          <Icon name="chevron-back-outline" size={22} color="black" />
          <Text style={styles.backText}>Back to Shop</Text>
        </Pressable>
        </View>
        <View style={styles.header}>
        <Pressable
        style={styles.viewOnWallButton}
        onPress={() => {navigation.navigate("ArtSVisualiser")}}
      >
        <Text style={styles.viewOnWallButtonText}>
          CLICK HERE TO VIEW THIS ARTWORK ON YOUR WALL
        </Text>
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
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 18,
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
  viewOnWallButton: {
    backgroundColor: "#396C4D",
    padding: 15,
    alignItems: "center",
    alignSelf: "center", 
    width: "100%", 
    maxWidth: 400,
  },
  viewOnWallButtonText: {
    fontFamily: "Neue-Light",
    fontSize: 13,
    color: "white",
    textAlign: "center", 
    overflow: "hidden", 
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    maxWidth: "100%", 
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
    color: "#black",
  },
  addToCartButtonText: {
    color: "black",
    fontSize: 16,
    fontFamily: "Neue-Light",
  },
  detailsTitle: {
    fontFamily: "Neue-Ultrabold",
    fontSize: 18,
    paddingTop: 18,
    paddingBottom: 3,
  },
  addToCartButton: {
    backgroundColor: "white",
    paddingTop: 15,
    paddingBottom: 15,
    flex: 0.5,
    borderWidth: 0.5,
    borderColor: "black",
    marginRight: 5,
    alignItems: "center",
  },
  purchaseContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: 22,
  },
  artMoneyText: {
    flex: 0.5,
    fontSize: 16,
    fontFamily: "Arial",
    fontSize: 14,
    color: "#636363",
    textAlign: "right",
  },
  artworkDetailsContainer: {
    marginTop: 10,
  },
  detailsParagraph: {
    textAlign: "left",
    fontSize: 22,
    fontFamily: "Darker-Light",
    flexShrink: 1, //allow the text to shrink and wrap
    lineHeight: 20,
    paddingTop: 18,
    color: "#585858",
    textAlign: "justify",
    hyphenationFactor: 0,
  },
  horizontalLine: {
    borderBottomColor: "#636363",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
});
