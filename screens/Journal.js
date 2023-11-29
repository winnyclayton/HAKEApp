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

export function Journal(props) {
  const [user, setUser] = useState();
  const Auth = useContext(AuthContext);

  useEffect(() => {
    if (Auth.currentUser) {
      setUser(Auth.currentUser);
    }
  }, [Auth]);

  const JournalData = [
    require("../assets/journals/journal_1.png"),
    require("../assets/journals/journal_2.png"),
    require("../assets/journals/journal_3.png"),
    require("../assets/journals/journal_4.png"),
    
  ];

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => {
        // Navigate to the journal detail page
      }}
      style={styles.journalItem}
    >
      <Image source={item} style={styles.journalImage} />
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.journalTitle}>Journals</Text>
      <FlatList
        data={JournalData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={1} //1 columns for mobile view
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
  journalTitle: {
    paddingTop: 18,
    paddingLeft: 18,
    fontSize: 26,
    fontFamily: "Neue-Regular",
  },
  flatListContainer: {
    padding: 10,
  },
  journalItem: {
    flex: 1,
    margin: 4,
    overflow: "hidden",
    padding: 5,
  },
  journalImage: {
    flex: 1,
    width: "100%",
    height: 400, // Set a fixed height for the image
    resizeMode: "cover", // Maintain aspect ratio and cover the entire space
  },
});
