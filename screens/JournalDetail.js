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

export function JournalDetail(props) {
  const [user, setUser] = useState();

  const Auth = useContext(AuthContext);
  const navigation = useNavigation();

  useEffect(() => {
    if (Auth.currentUser) {
      setUser(Auth.currentUser);
    }
  }, [Auth]);

  const shopallData = [require("../assets/journals/journal_1.png")];

  const renderItem = ({ item }) => (
    <View style={styles.shopallItem}>
      <Image source={item} style={styles.shopallImage} />
      <View style={styles.journalContainer}>
        <Text style={styles.journalAuthors}>Adam Leng x Deborah Sams</Text>
        </View>
        <View style={styles.paragraphContainer}>
        <Text style={styles.paragraphText}>
        Understanding the value of engaging with the past while responding to the present. Drawing inspiration from history, artists and designers, alike, can reinterpret and reinvent. Breathing new life into familiar concepts. This dynamic interaction with the past allows for the preservation of heritage while embracing the ever-evolving creative landscape, especially in a world that is pushing to see more in the ways of digital creativity.{'\n\n'}

Returning to natural influences and keeping the long standing dialogue between Earth and art, Australian creatives - such as First Nations artist Adam Leng and Deborah Sams the creative director behind bassike - are on the forefront of keeping this conversation alive and well. With so much in the landscape to draw upon, it’s so easy to be continuously inspired and maintain intrigue in audiences even when considering the notion of trends in art and design.{'\n\n'}

See below the conversations between artisans Deborah Sams   
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.navigate("Journal")}
        >
          <Icon name="chevron-back-outline" size={22} color="black" />
          <Text style={styles.backText}>Back to Journal</Text>
        </Pressable>
      </View>
      <View style={styles.header}>
        <Text style={styles.journalDetailTitle}>Journal Vol.04</Text>
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
  journalDetailTitle: {
    fontSize: 26,
    fontFamily: "Neue-Regular",
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
    height: 400,
    resizeMode: "cover",
  },
  journalAuthors: {
    marginTop: 10,
    fontSize: 17,
    fontFamily: "Arial-Black",
    alignContent: 'center',
  },
  shopallArtist: {
    textAlign: "left",
    fontSize: 18,
    fontFamily: "Neue-Light",
  },
  journalContainer: {
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
  paragraphContainer: {
    paddingTop: 10, // Adjust as needed
  },
  paragraphText: {
    fontFamily: "Darker-Light",
    fontSize: 18,
    lineHeight: 26,
    textAlign: "justify",
    hyphenationFactor: 0,
    color: "#585858",
  },
});
