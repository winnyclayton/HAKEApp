import React from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import { useContext, useState, useEffect } from 'react';
import "../assets/fonts/NeueMachina-Light.otf";
import "../assets/fonts/NeueMachina-Regular.otf";
import "../assets/fonts/NeueMachina-Ultrabold.otf";
import { AuthContext } from '../contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';


export function ShoppingCart(props) {
  const [user, setUser] = useState();

  const Auth = useContext(AuthContext);
  const navigation = useNavigation();

  useEffect(() => {
    if (Auth.currentUser) {
      setUser(Auth.currentUser);
    }
  }, [Auth]);

  return (
    <View style={styles.container}>
      <Text style={styles.shoppingCartTitle}>Shopping Cart</Text>
      <Text style={styles.emptyCart}>Your cart is empty.</Text>
      <Pressable
        style={styles.browseButton}
        onPress={() => navigation.navigate('Shop')}
        >
        <Text style={styles.browseText}>Browse products</Text>
      </Pressable>
      <View style={styles.bottomContainer}>
        {/* Your existing content */}

        {/* Checkout Button */}
        <Pressable style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>Checkout</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF9EE', 
  },
  shoppingCartTitle: {
    padding: 18,
    fontSize: 26,
    fontFamily: 'Neue-Regular',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  browseButton: {
    flexDirection: 'row',
    paddingLeft: 18,
  },
  browseText: {
    fontFamily: 'Neue-Light',
    fontSize: 18,
    textDecorationLine: 'underline',
    marginRight: 5,
  },
  emptyCart: {
    fontFamily: 'Neue-Light',
    fontSize: 18,
    paddingLeft: 18,
    paddingTop: 26,
    paddingBottom: 18,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 18,
  },
  // Checkout Button Styles
  checkoutButton: {
    backgroundColor: '#DEDEDE',
    borderColor: 'black',
    borderWidth: 1,
    padding: 18,
    alignItems: 'center',
  },
  checkoutText: {
    color: '#A0A0A0',
    fontFamily: 'Neue-Light',
    fontSize: 18,
  },
});
