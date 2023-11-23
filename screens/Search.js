import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import "../assets/fonts/NeueMachina-Light.otf";
import "../assets/fonts/NeueMachina-Regular.otf";
import "../assets/fonts/NeueMachina-Ultrabold.otf";
import { AuthContext } from '../contexts/AuthContext';

export function Search(props) {
  const [user, setUser] = useState();
  const [searchKeyword, setSearchKeyword] = useState('');

  const Auth = useContext(AuthContext);

  useEffect(() => {
    if (Auth.currentUser) {
      setUser(Auth.currentUser);
    }
  }, [Auth]);

  const handleSearch = () => {
    console.log('Searching for:', searchKeyword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.contactTitle}>Search by artist/artworks/keyword</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Coastal, warm colours"
          placeholderTextColor="#A9A9A9"
          value={searchKeyword}
          onChangeText={(text) => setSearchKeyword(text)}
        />
        <Pressable onPress={handleSearch} style={styles.searchIconContainer}>
          <Icon name="search" color="white" size={25} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#396C4D',
    alignItems: 'center',
    justifyContent: 'center',
  },

  contactTitle: {
    fontSize: 15,
    fontFamily: "Neue-Regular",
    color: 'white',
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
    height: 75, 
    width: '90%',
  },

  input: {
    flex: 1,
    height: '100%', 
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    color: 'black',
  },

  searchIconContainer: {
    backgroundColor: '#396C4D',
    borderRadius: 5,
    padding: 10,
    marginLeft: 10,
    height: '100%', 
  },
});