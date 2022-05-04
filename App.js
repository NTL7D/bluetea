import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Login } from "./components/account/login/login";
import { Register } from "./components/account/register/register";
import { NavigationContainer } from "@react-navigation/native";
import { HomeApp } from "./HomeApp";
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();

export default function App(props) {
  const [email, setEmail] = useState(null);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {email ? (
          <Stack.Screen name="Home">
            {(props) => <HomeApp {...props} extraData={email} />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
