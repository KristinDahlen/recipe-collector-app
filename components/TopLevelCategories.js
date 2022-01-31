import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";

const TopLevelCategories = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topLevelCategoryContainer}>
        <TouchableOpacity
          style={styles.categoryContainer}
          onPress={() =>
            navigation.navigate("Category", { category: "Frukost" })
          }
        >
          <Image source={require("../images/breakfast_icon.png")} />
          <Text>Frukost</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryContainer}>
          <Image source={require("../images/lunch_icon.png")} />
          <Text>Lunch</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.topLevelCategoryContainer}>
        <TouchableOpacity style={styles.categoryContainer}>
          <Image source={require("../images/dinner_icon.png")} />
          <Text>Middag</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryContainer}>
          <Image source={require("../images/snacks_icon.png")} />
          <Text>Snacks</Text>
        </TouchableOpacity>
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
