import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import SafeViewAndroid from "./SafeViewAndroid";

const Navigation = () => {
  return (
    <View style={styles.navigationContainer}>
      <SafeAreaView style={SafeViewAndroid.AdroidSafeArea}>
        <Feather name="menu" size={30} style={styles.menuIcon} />
      </SafeAreaView>
    </View>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  navigationContainer: {
    height: 70,
    width: "100%",
    display: "flex",
    alignItems: "flex-end",
  },
  menuIcon: {
    paddingHorizontal: 20,
  },
});
