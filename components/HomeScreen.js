import React, { useState, useEffect } from "react";
import { ScrollView, SafeAreaView, StyleSheet } from "react-native";
import Navigation from "./Navigation";
import RecipeTips from "./RecipeTips";
import TopLevelCategories from "./TopLevelCategories";

import apiHandler from "./../api/handler";

const credentials = { email: '', password: '' } //TODO get from config

const HomeScreen = () => {
  const login = async () => {
    if (token) {
      //check if still valid via /me route
      const now = new Date(Date.now());
      console.log(now.toString(), '- Token is valid');
      return;
    }
    const t = await apiHandler.login(credentials);
    setToken(t);
  }

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

  const [token, setToken] = useState();
  useEffect(() => {
    login();
    getRecipes();
  });

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
