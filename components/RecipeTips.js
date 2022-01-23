import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const RecipeTips = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.timeBasedFirstText}>Sugen på</Text>
      <Text style={styles.timeBasedSecondText}>frukost?</Text>

      <View style={styles.timeBasedContainer}>
        <Image
          style={styles.timeBasedImage}
          source={require("../images/smoothie-bowl.jpeg")}
        />
        <View style={styles.recipeTextContainer}>
          <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>
            Frukost
          </Text>
          <Text numberOfLines={1} style={{ fontSize: 20, color: "white" }}>
            Smoothie bowl med blåbär, jordgubbar och nötter
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RecipeTips;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    paddingBottom: 80,
  },
  timeBasedFirstText: {
    fontSize: 30,
    paddingBottom: 30,
    letterSpacing: 4,
    marginBottom: -30,
  },
  timeBasedSecondText: {
    fontSize: 50,
    paddingBottom: 30,
    letterSpacing: 3,
  },
  timeBasedContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  timeBasedImage: {
    height: 270,
    width: "100%",
    position: "absolute",
  },
  recipeTextContainer: {
    backgroundColor: "#FBC899",
    width: "100%",
    height: 70,
    paddingLeft: 10,
    marginTop: 200,
    opacity: 0.85,
  },

  recipeText: {
    fontSize: 25,
  },
});
