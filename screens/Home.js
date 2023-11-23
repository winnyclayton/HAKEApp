import { View, Text, StyleSheet, Image, Style } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import IonIcons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-web";

import { AuthContext } from "../contexts/AuthContext";
import { useContext, useState, useEffect } from "react";

import { Shop } from "./Shop";
import { Artists } from "./Artists";
import { Stockroom } from "./Stockroom";
import { Exhibitions } from "./Exhibitions";
import { Journal } from "./Journal";
import { Contact } from "./Contact";
import { ShoppingCart } from "./ShoppingCart";
import { Search } from "./Search";

//fonts
import "../assets/fonts/NeueMachina-Light.otf";
import "../assets/fonts/NeueMachina-Regular.otf";
import "../assets/fonts/NeueMachina-Ultrabold.otf";

import HakeLogoBlackSmall from "../assets/HakeLogoBlackSmall.png";

const Tab = createBottomTabNavigator();

export function Home(props) {
  const navigation = useNavigation();

  //custom tab button component to position label below icon
  const CustomTabButton = ({ label, icon, color, size }) => (
    <View style={{ alignItems: "center" }}>
      <IonIcons name={icon} color={color} size={size} />
      <Text
        style={{ color, fontSize: 10, fontFamily: "Neue-Light", padding: 5 }}
      >
        {label}
      </Text>
    </View>
  );

  const commonOptions = {
    headerStyle: {
      backgroundColor: "#E5EDD5",
    },
    headerTitleAlign: "left",
    headerTintColor: "black",
    title: (
      <View
        style={{ flexDirection: "row", alignItems: "center", paddingLeft: 2 }}
      >
        <Image source={HakeLogoBlackSmall} style={{ width: 65, height: 40 }} />
      </View>
    ),
    headerRight: () => (
      <View style={{ flexDirection: "row", marginRight: 16 }}>
        <TouchableOpacity
          style={styles.contact}
          onPress={() => navigation.navigate("Contact")}
        >
          <IonIcons name="call-outline" color="black" size={30} />
        </TouchableOpacity>
        <></>
        <TouchableOpacity
          style={styles.shoppingcart}
          onPress={() => navigation.navigate("ShoppingCart")}
        >
          <IonIcons name="cart-outline" color="black" size={30} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.search}
          onPress={() => navigation.navigate("Search")}
        >
          <IonIcons name="search-outline" color="black" size={30} />
        </TouchableOpacity>
      </View>
    ),
  };

  return (
    <Tab.Navigator
      initialRouteName="Stockroom"
      screenOptions={{
        tabBarActiveTintColor: "#DAF6B2", //change the active tab color to green
        tabBarInactiveTintColor: "white", //change the inactive tab color to white
        tabBarStyle: { backgroundColor: "#396C4D" }, // hange the background color of the nav bar
        tabBarLabelStyle: {
          fontFamily: "Neue-Light",
          fontSize: 12,
          paddingLeft: 0,
        },
      }}
    >
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          ...commonOptions,
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <CustomTabButton
              label="Shop"
              icon="pricetag-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Artists"
        component={Artists}
        options={{
          ...commonOptions,
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <CustomTabButton
              label="Artists"
              icon="pencil-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Stockroom"
        component={Stockroom}
        options={{
          ...commonOptions,
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <CustomTabButton
              label="Stockroom"
              icon="home-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Exhibitions"
        component={Exhibitions}
        options={{
          ...commonOptions,
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <CustomTabButton
              label="Exhibitions"
              icon="calendar-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Journal"
        component={Journal}
        options={{
          ...commonOptions,
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <CustomTabButton
              label="Journal"
              icon="journal-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          ...commonOptions,
          tabBarLabel: "Contact",
          tabBarButton: () => null,
        }}
      />

      <Tab.Screen
        name="ShoppingCart"
        component={ShoppingCart}
        options={{
          ...commonOptions,
          tabBarLabel: "ShoppingCart",
          tabBarButton: () => null,
        }}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          ...commonOptions,
          tabBarLabel: "Search",
          tabBarButton: () => null,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  contact: {
    padding: 5,
  },

  shoppingcart: {
    padding: 5,
  },

  search: {
    padding: 5,
  },
});
