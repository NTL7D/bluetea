import React from "react";
import {View, StyleSheet} from "react-native";
import {Account} from "../components/account/Account";

export const AccountScreen = () => {
  return (
    <View style={styles.container}>
      <Account />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});