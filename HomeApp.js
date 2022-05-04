import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "./Screen/HomeScreen";
import { CartScreen } from "./Screen/CartScreen";
import { AccountScreen } from "./Screen/AccountScreen";
import { AboutusScreen } from "./Screen/AboutusScreen";
import { Feather, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export const HomeApp = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <NavigationContainer independent={true}>
        <Tab.Navigator>
          <Tab.Screen
            name="Item"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="home-variant"
                  size={20}
                  color={color}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Cart"
            component={CartScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <Feather name="shopping-bag" size={20} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={AccountScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <Ionicons name="person" size={20} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="About us"
            component={AboutusScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <Ionicons name="information-circle" size={20} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
