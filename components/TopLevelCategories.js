import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const TopLevelCategories = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topLevelCategoryContainer}>
        <View style={styles.categoryContainer}>
          <Image source={require("../images/breakfast_icon.png")} />
          <Text>Frukost</Text>
        </View>
        <View style={styles.categoryContainer}>
          <Image source={require("../images/lunch_icon.png")} />
          <Text>Lunch</Text>
        </View>
      </View>

      <View style={styles.topLevelCategoryContainer}>
        <View style={styles.categoryContainer}>
          <Image source={require("../images/dinner_icon.png")} />
          <Text>Middag</Text>
        </View>
        <View style={styles.categoryContainer}>
          <Image source={require("../images/snacks_icon.png")} />
          <Text>Snacks</Text>
        </View>
      </View>
    </View>
  );
};

export default TopLevelCategories;

const styles = StyleSheet.create({
  topLevelCategoryContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    flex: 2,
    paddingBottom: 40,
  },
  categoryContainer: {
    display: "flex",
    alignItems: "center",
    flex: 1,
  },
});
