import * as React from "react";
import { ScrollView, SafeAreaView, StyleSheet } from "react-native";
import Navigation from "./Navigation";
import RecipeTips from "./RecipeTips";
import TopLevelCategories from "./TopLevelCategories";

const HomeScreen = () => {
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
