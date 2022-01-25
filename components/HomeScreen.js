import React, { useState, useEffect, useContext } from "react";
import { ScrollView, SafeAreaView, StyleSheet } from "react-native";
import Navigation from "./Navigation";
import RecipeTips from "./RecipeTips";
import TopLevelCategories from "./TopLevelCategories";

import LoginContext from "../context/LoginContext";
import apiHandler from "./../api/handler";

const HomeScreen = () => {
  const token = useContext(LoginContext);

  const getRecipes = async () => {
    if (!token) {
      console.log('Not logged in');
      return;
    }
    const recipes = await apiHandler.getRecipes(token);

    console.log('Stand in for component:');
    if (!recipes) {
      console.log('"could not get recipes, try again"');
      return;
    }
    recipes.forEach(r => console.log('Recept id:', r.id, 'Title:', r.title));
  }

  useEffect(getRecipes);

  return (
    <ScrollView>
      <SafeAreaView>
        <Navigation />
        <RecipeTips />
        <TopLevelCategories />
      </SafeAreaView>
    </ScrollView>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
  },
});
