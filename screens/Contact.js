import React from "react";
import {
  View,
  Text,
  Pressable,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useContext, useState, useEffect } from "react";
import "../assets/fonts/NeueMachina-Light.otf";
import "../assets/fonts/NeueMachina-Regular.otf";
import "../assets/fonts/NeueMachina-Ultrabold.otf";

import { AuthContext } from "../contexts/AuthContext";

export function Contact(props) {
  const [user, setUser] = useState();

  const Auth = useContext(AuthContext);

  useEffect(() => {
    if (Auth.currentUser) {
      setUser(Auth.currentUser);
    }
  }, [Auth]);

  return (
    <View style={styles.container}>
      <Text style={styles.contactTitle}>Contact Us</Text>
      <Text style={styles.infoTitles}>Opening Hours</Text>
      <Text style={styles.infoLines}>
        Thursday 9 - 3{'\n'}
        Friday 9 - 3{'\n'}
        Saturday 9 - 3{'\n'}
        or by appointment hello@hake.house
      </Text>
      <Text style={styles.infoTitles}>Contact us</Text>
      <Text style={styles.infoLines}>
        hello@hake.house{'\n'}
        1/275 Harbord Road{'\n'}
        Dee Why, 2099{'\n'}
        Jake - Ph: 0422 550 880{'\n'}
        Sammy - Ph. 0431 336 140
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //take up the entire screen
    backgroundColor: "#FDF9EE",
  },

  contactTitle: {
    padding: 18,
    fontSize: 26,
    fontFamily: "Neue-Regular",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  },
  infoTitles: {
    fontFamily: "Neue-Regular",
    fontSize: 22,
    padding: 18,
  },
  infoLines: {
    fontFamily: "Neue-Light",
    fontSize: 16,
    paddingLeft: 18,
    lineHeight: 30,
  },
});

