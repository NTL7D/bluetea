import React from "react";
import { View, ScrollView } from "react-native";
import { Coffee } from "../components/item/coffee";

export const CoffeeScreen = () => {
  return (
    <ScrollView style={{ width: "100%", height: 540 }}>
      <View>
        <Coffee />
      </View>
    </ScrollView>
  );
};
