import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {Form} from "../components/about/form"
import {Member} from "../components/about/member"

export const AboutusScreen = () => {
  return (
    <View style={styles.container}>
      <Form />
      <Member />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});