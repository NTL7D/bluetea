import React from "react";
import { View, StyleSheet } from "react-native";
import {Profile} from "../components/account/profile/profile"

export const AccountScreen = () => {
  return (
    <View style={styles.container}>
      <Profile />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
