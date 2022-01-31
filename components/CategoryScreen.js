import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import database from "../database.json";

const CategoryView = ({ route }) => {
  const recipes = database.recipes;
  const category = route.params.category;

  const recipe = () => {
    return recipes.map((recipe, index) => (
      <View style={styles.container} key={index}>
        <Image
          style={styles.image}
          source={{ uri: `data:image/jpeg;base64,${recipe.img}` }}
        />
        <View style={styles.recipeTextContainer}>
          <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>
            {category}
          </Text>
          <Text numberOfLines={1} style={{ fontSize: 20, color: "white" }}>
            {recipe.title}
          </Text>
        </View>
      </View>
    ));
  };
  return (
    <ScrollView>
      <SafeAreaView>{recipe()}</SafeAreaView>
    </ScrollView>
  );
};

export default CategoryView;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    paddingBottom: 40,
  },
  image: {
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
