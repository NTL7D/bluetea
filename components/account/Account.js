import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Profile } from "./profile/profile";
import { Register } from "./register/register";
import { Login } from "./login/login";

const Stack = createStackNavigator();

export const Account = ({ navigation }) => {
  return (
    <View>
      <NavigationContainer independent={true}>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};
