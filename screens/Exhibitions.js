import React from 'react';
import { View, Text, Pressable, TextInput, StyleSheet, ScrollView } from 'react-native';
import { useContext, useState, useEffect } from 'react';
import "../assets/fonts/NeueMachina-Light.otf";
import "../assets/fonts/NeueMachina-Regular.otf";
import "../assets/fonts/NeueMachina-Ultrabold.otf";

import { AuthContext } from '../contexts/AuthContext';

export function Exhibitions(props) {
  const [user, setUser] = useState();

  const Auth = useContext(AuthContext);

  useEffect(() => {
    if (Auth.currentUser) {
      setUser(Auth.currentUser);
    }
  }, [Auth]);

  return (
    <View style={styles.container}>
      <Text style={styles.exhibitionTitle}>Upcoming Exhibitions</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //take up the entire screen
    backgroundColor: '#FDF9EE', 
  },

  exhibitionTitle: {
    padding: 18,
    fontSize: 26,
    fontFamily: "Neue-Regular",
  }
});
