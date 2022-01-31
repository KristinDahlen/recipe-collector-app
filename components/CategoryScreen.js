import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";

import LoginContext from "../context/LoginContext";
import apiHandler from "./../api/handler";

const CategoryView = ({ route }) => {
  const getRecipes = async () => {
    if (!token) {
      console.log("Not logged in");
      throw new Error("Not logged in");
    }
    const recipes = await apiHandler.getRecipes(token);

    if (!recipes) {
      console.log("Recipes could not be loaded");
      throw new Error("Recipes could not be loaded");
    }

    return recipes;
  }

  const [recipes, setRecipes] = useState();
  const [error, setError] = useState();
  const token = useContext(LoginContext);

  useEffect(() => {
    getRecipes()
      .then(setRecipes)
      .catch(e => setError(e.message));
  }, []);

  const category = route.params.category;

  const renderError = () => {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 25, fontWeight: "bold", color: "black" }}>{error}</Text>
      </View>
    );
  }

  const renderEmpty = () => {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 25, fontWeight: "bold", color: "black" }}>No recipes! Click somwhere to make one</Text>
      </View>
    );
  }

  const renderRecipes = () => {
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

  const renderView = () => {
    if (error) {
      return renderError();
    } else if (recipes) {
      return recipes.length == 0 ? renderEmpty() : renderRecipes();
    }
  }

  return (
    <ScrollView>
      <SafeAreaView>{renderView()}</SafeAreaView>
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
