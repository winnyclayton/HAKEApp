import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FontFace } from "react-native";
import { useState } from "react";
// contexts
import { AuthContext } from "./contexts/AuthContext";
import { DbContext } from "./contexts/DbContext";
// firebase
import { firebaseConfig } from "./config/Config";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// react navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// screens
import { Home } from "./screens/Home";
import "./App.css";

const Stack = createNativeStackNavigator();

export default function App() {
  const FBapp = initializeApp(firebaseConfig);
  const FBauth = getAuth(FBapp);
  const FBdb = getFirestore(FBapp);
  // state
  const [auth, setAuth] = useState();

  return (
    <AuthContext.Provider value={FBauth}>
      <DbContext.Provider value={FBdb}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" options={{ headerShown: false }}>
              {(props) => <Home />}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </DbContext.Provider>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
