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

export function ArtSVisualiser(props) {
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
      <View style={styles.header}>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.navigate("ShopDetail")}
        >
          <Icon name="chevron-back-outline" size={22} color="black" />
          <Text style={styles.backText}>Back to artwork</Text>
        </Pressable>
      </View>
      <View style={styles.featureTitleContainer}>
        <Text style={styles.featureTitle}>Art Space Visualiser</Text>
        <View style={styles.horizontalLine} />
        <Text style={styles.featureInstructions}>
          Unsure about how this artwork will look in your space? Upload an image
          of your space, and our graphic designer will provide you with a
          visual.
        </Text>
        <Image
          source={require("../assets/artspacevisualiser.png")}
          style={styles.artSpaceVisualiserImage}
        />
      </View>

      {/* Form Row 1 */}
      <View style={styles.formRow}>
        <TextInput
          style={styles.textInput}
          placeholder="Full Name"
          placeholderTextColor="black"
        />
        <View style={styles.artworkTextInputContainer}>
          <TextInput
            style={styles.artworkTextInput}
            placeholder="Charcoal Run #1"
            placeholderTextColor="black"
            editable={false}
          />
        </View>
      </View>

      {/* Form Row 2 */}
      <View style={styles.formRow}>
        <TextInput
          style={styles.textInputEmail}
          placeholder="Email address"
          placeholderTextColor="black"
        />
      </View>

      {/* Form Row 3 */}
      <View style={styles.formRow}>
        <Pressable style={styles.uploadImageButton}>
          <Text style={styles.uploadImageButtonText}>Upload Image</Text>
        </Pressable>
        <Text style={styles.uploadImageInfoText}>png, jpg, jpeg accepted</Text>
      </View>

      {/* Form Row 4 */}
      <View style={styles.formRow}>
        <TextInput
          style={styles.textInputComments}
          placeholder="Description of placement (optional - we can decide for you)"
          placeholderTextColor="black"
          multiline
        />
      </View>

      {/* Form Row 5 */}
      <View style={styles.formRow}>
        <Pressable style={[styles.submitButton, { flex: 0.7 }]}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </Pressable>
        <Pressable style={[styles.cancelButton, { flex: 0.3 }]}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </Pressable>
      </View>
    </View>
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
  horizontalLine: {
    borderBottomColor: "#636363",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  featureTitleContainer: {
    padding: 18,
  },
  featureTitle: {
    fontFamily: "Neue-Regular",
    fontSize: 26,
    paddingBottom: 8,
  },
  featureInstructions: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Neue-Light",
    flexShrink: 1, //allow the text to shrink and wrap
    lineHeight: 26,
  },
  artSpaceVisualiserImage: {
    width: "100%",
    height: 250, 
    resizeMode: "cover", 
    marginTop: 5, 
  },
  formRow: {
    flexDirection: "row",
    marginBottom: 15,
    paddingLeft: 18,
    paddingRight: 18,
  },
  textInput: {
    flex: 0.5,
    height: 40,
    borderColor: "#585858",
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
    backgroundColor: "white",
    fontFamily: "Darker-Light",
    fontSize: 18,
  },
  textInputEmail: {
    flex: 1,
    height: 40,
    borderColor: "#585858",
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    fontFamily: "Darker-Light",
    fontSize: 18,
  },
  textInputComments: {
    flex: 1,
    height: 100,
    borderColor: "#585858",
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    fontFamily: "Darker-Light",
    fontSize: 18,
  },
  artworkTextInputContainer: {
    flex: 0.5,
  },
  artworkTextInput: {
    height: 40,
    borderColor: "#585858",
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#DEDEDE", 
    fontFamily: "Darker-Light",
    fontSize: 18,
    textAlign: "center",
  },
  uploadImageButton: {
    flex: 0.5,
    backgroundColor: "#E5EDD5",
    padding: 10,
    marginRight: 10,
    borderColor: "#585858",
    borderWidth: 1,
  },
  uploadImageButtonText: {
    color: "black",
    textAlign: "center",
    fontFamily: "Neue-Regular",
    textAlign: "center",
  },
  uploadImageInfoText: {
    flex: 0.5,
    textAlign: "center",
    lineHeight: 40,
    color: "black",
    fontFamily: "Darker-Light",
    fontSize: 18,
  },
  submitButton: {
    backgroundColor: "#396C4D",
    padding: 15,
    marginRight: 10,
  },
  submitButtonText: {
    color: "white",
    textAlign: "center",
    fontFamily: "Neue-Regular",
  },
  cancelButton: {
    backgroundColor: "#DEDEDE",
    padding: 15,
    borderColor: "#585858",
    borderWidth: 1,
  },
  cancelButtonText: {
    color: "black",
    textAlign: "center",
    fontFamily: "Neue-Regular",
  },
});
