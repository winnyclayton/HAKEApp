import React, { useContext, useState, useEffect } from "react";
import { View, Text, Pressable, StyleSheet, FlatList } from "react-native";
import { AuthContext } from "../contexts/AuthContext";

export function Exhibitions(props) {
  const [user, setUser] = useState();

  const Auth = useContext(AuthContext);

  useEffect(() => {
    if (Auth.currentUser) {
      setUser(Auth.currentUser);
    }
  }, [Auth]);

  const exhibitionsData = [
    {
      dateDay: "3",
      dateMonth: "NOV",
      artist: "Ash Holmes",
      type: "Solo Exhibition",
    },
    {
      dateDay: "1",
      dateMonth: "DEC",
      artist: "Tiarna Herczeg",
      type: "Solo Exhibition",
    },
    {
      dateDay: "12",
      dateMonth: "DEC",
      artist: "Kane Lehanneur",
      type: "Solo Exhibition",
    },
    // Add more exhibition entries as needed
  ];

  const renderExhibitionItem = ({ item }) => (
    <View style={styles.exhibitionItem}>
      <View style={styles.rowContainer}>
        {/* dateContainer */}
        <View style={[styles.dateContainer, { flex: 20 }]}>
          <Text style={styles.dateDayText}>{item.dateDay}</Text>
          <Text style={styles.dateMonthText}>{item.dateMonth}</Text>
        </View>

        {/* artistContainer */}
        <View style={[styles.artistContainer, { flex: 50 }]}>
          <Text style={styles.artistText}>{item.artist}</Text>
          <Text style={styles.typeText}>{item.type}</Text>
        </View>

        {/* rsvpContainer */}
        <View style={[styles.rsvpContainer, { flex: 30 }]}>
          <Pressable style={styles.rsvpButton}>
            <Text style={styles.rsvpButtonText}>RSVP</Text>
          </Pressable>
        </View>
      </View>

      {/* buttonContainer */}
      <View style={styles.buttonContainer}>
        <Pressable style={styles.catalogueButton}>
          <Text style={styles.catalogueButtonText}>Request Catalogue</Text>
        </Pressable>
        <Pressable style={styles.viewArtistButton}>
          <Text style={styles.viewArtistButtonText}>View Artist</Text>
        </Pressable>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.exhibitionTitle}>Upcoming Exhibitions</Text>
      <FlatList
        data={exhibitionsData}
        renderItem={renderExhibitionItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDF9EE",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 20,
    paddingRight: 10,
  },
  dateContainer: {
    paddingRight: 10,
  },
  artistContainer: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  rsvpContainer: {
    alignItems: "flex-end",
  },

  exhibitionTitle: {
    padding: 18,
    fontSize: 26,
    fontFamily: "Neue-Regular",
  },
  exhibitionItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    borderBottomColor: "#ccc",
  },
  dateDayText: {
    fontSize: 20,
    paddingLeft: 10,
    fontFamily: "Neue-Ultrabold",
    textAlign: "center",
    color: "#396C4D",
  },
  dateMonthText: {
    fontSize: 16,
    paddingLeft: 10,
    fontFamily: "Arial",
    fontWeight: "bold",
    textAlign: "center",
    color: "#396C4D",
  },
  exhibitionDetails: {
    flexDirection: "column",
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
  },
  rsvpButton: {
    backgroundColor: "#396C4D",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 15,
    alignItems: "center",
  },
  catalogueButton: {
    backgroundColor: "#E5EDD5",
    paddingTop: 15,
    paddingBottom: 15,
    flex: 1,
    borderWidth: 0.5,
    borderColor: "black",
    marginRight: 5,
    alignItems: "center",
  },
  viewArtistButton: {
    backgroundColor: "white",
    paddingTop: 15,
    paddingBottom: 15,
    flex: 1,
    borderWidth: 0.5,
    borderColor: "black",
    marginLeft: 5,
    alignItems: "center",
  },
  rsvpButtonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Neue-Light",
  },
  catalogueButtonText: {
    color: "black",
    fontSize: 16,
    fontFamily: "Neue-Light",
  },
  viewArtistButtonText: {
    color: "black",
    fontSize: 16,
    fontFamily: "Neue-Light",
  },
  artistText: {
    color: "black",
    fontSize: 16,
    fontFamily: "Arial-Black",
  },
  typeText: {
    color: "black",
    fontSize: 16,
    fontFamily: "Arial",
  },
});
