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

export function StockroomDetail(props) {
  const [user, setUser] = useState();

  const Auth = useContext(AuthContext);
  const navigation = useNavigation();

  useEffect(() => {
    if (Auth.currentUser) {
      setUser(Auth.currentUser);
    }
  }, [Auth]);

  const shopallData = [
    require("../assets/stockroomDetail/adamleng_1.png"),
    require("../assets/stockroomDetail/adamleng_2.png"),
    require("../assets/stockroomDetail/adamleng_3.png"),
    require("../assets/stockroomDetail/adamleng_4.png"),
  ];

  const renderItem = ({ item }) => (
    <View style={styles.shopallItem}>
      <Image source={item} style={styles.shopallImage} />
      <Text style={styles.shopallTitle}>Artwork Title</Text>
    </View>
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Pressable
            style={styles.backButton}
            onPress={() => navigation.navigate("Shop")}
          >
            <Icon name="chevron-back-outline" size={22} color="black" />
            <Text style={styles.backText}>Back to Stockroom</Text>
          </Pressable>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.stockroomTitle}>Adam Leng</Text>
          <Pressable
            style={styles.enquiryButton}
            onPress={() => navigation.navigate("ArtworkEnquiry")}
          >
            <Text style={styles.enquiryButtonText}>Artwork enquiry</Text>
          </Pressable>
        </View>
        <View style={styles.paragraphContainer}>
          <Text style={styles.paragraphText}>
            Meandering lines are signatory to Adam Leng’s work. Always in
            threes, the first line is for Adam, it shows himself as the
            individual, the second line represents the land he’s from and is on.
            The third line is a mindful homage to his ancestors. The lines,
            Entwined, create a dynastic tapestry that charts a complex
            connection, spanning generations. They are a way for Adam to
            understand and establish where he belongs as a proud First Nations
            man.
            {"\n\n"}
            Until this body of work, Adam’s deep and allegorical linework was a
            way for Adam to connect to his past. Now, Bobby Love is a promising
            look into the future of his family tree, which is evident in a new
            direction in his practice. Working Collaboratively with ceramicist
            Fin George to create seven vessels.
            {"\n\n"}
            With his first daughter on the way, the eponym of Bobby Love. Themes
            of new life and existence are intrinsic to this body of work.
            Bringing joy and profound meaning to his life and work.
            {"\n\n"}- Words by Venn Miles, HAKE.
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <FlatList
            data={shopallData}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            contentContainerStyle={styles.flatListContainer}
          />
        </View>
      </View>
    </ScrollView>
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
  enquiryButton: {
    flex: 0.4,
    backgroundColor: "white",
    padding: 15,
    alignItems: "center",
    alignSelf: "center",
    width: "100%",
    borderWidth: 1,
    borderColor: "black",
  },
  enquiryButtonText: {
    fontFamily: "Neue-Light",
    fontSize: 14,
    textAlign: "center",
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
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 22,
    paddingLeft: 18,
    paddingRight: 18,
  },
  stockroomTitle: {
    flex: 0.6,
    fontSize: 26,
    fontFamily: "Neue-Regular",
    textAlign: "left",
  },
  paragraphContainer: {
    padding: 18,
    paddingTop: 10,
  },
  paragraphText: {
    fontFamily: "Darker-Light",
    fontSize: 18,
    lineHeight: 20,
    textAlign: "justify",
    hyphenationFactor: 0,
    color: "#585858",
  },
  imageContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  shopallImage: {
    flex: 1,
    width: "100%",
    height: 250,
    resizeMode: "cover",
    marginBottom: 8,
  },
  shopallTitle: {
    textAlign: "left",
    marginTop: 8,
    fontSize: 16,
    fontFamily: "Neue-Light",
  },
});
