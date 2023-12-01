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
import { useNavigation } from "@react-navigation/native";

export function Stockroom(props) {
  const [user, setUser] = useState();
  const Auth = useContext(AuthContext);
  const navigation = useNavigation();

  useEffect(() => {
    if (Auth.currentUser) {
      setUser(Auth.currentUser);
    }
  }, [Auth]);

  const stockroomData = [
    require("../assets/stockroom/artist_1.png"),
    require("../assets/stockroom/artist_2.png"),
    require("../assets/stockroom/artist_3.png"),
    require("../assets/stockroom/artist_4.png"),
    require("../assets/stockroom/artist_5.png"),
    require("../assets/stockroom/artist_6.png"),
    require("../assets/stockroom/artist_7.png"),
    require("../assets/stockroom/artist_8.png"),
  ];

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => {
        navigation.navigate("StockroomDetail")
      }}
      style={styles.stockroomItem}
    >
      <Image source={item} style={styles.stockroomImage} />
      <Text style={styles.artistTitle}>Artist Name</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.stockroomTitle}>Stockroom</Text>
      <FlatList
        data={stockroomData}
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
  stockroomTitle: {
    paddingTop: 18,
    paddingLeft: 18,
    fontSize: 26,
    fontFamily: "Neue-Regular",
  },
  flatListContainer: {
    padding: 10,
  },
  stockroomItem: {
    flex: 1,
    margin: 4,
    overflow: "hidden",
    padding: 5,
  },
  stockroomImage: {
    flex: 1,
    width: "100%",
    height: 190, 
    resizeMode: "cover", 
  },
  artistTitle: {
    textAlign: "center",
    marginTop: 15,
    fontSize: 16,
    fontFamily: "Neue-Light",
  },
});
