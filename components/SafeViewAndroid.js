import { Platform, StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  AdroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
