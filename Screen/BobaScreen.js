import React from "react";
import { ScrollView } from "react-native";
import { Bobatea } from "../components/item/bobatea";

export const BobaScreen = () => {
  return (
    <ScrollView style={{ width: "100%", height: 540 }}>
      <Bobatea />
    </ScrollView>
  );
};
