import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { auth } from "../../../firebase";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Home");
      }
    });

    return unsubscribe;
  }, []);

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.nav}>Đăng nhập</Text>
        <View style={{ justifyContent: "center", marginTop: 10 }}>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="Tên đăng nhập"
          ></TextInput>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder="Mật khẩu"
            secureTextEntry={true}
          ></TextInput>
          <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
            <Text style={styles.login}>Đăng nhập</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.register}
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            <Text style={{ opacity: "40%" }}>Chưa có tài khoản?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  wrapper: {
    backgroundColor: "#A7C7E7",
    width: "90%",
    height: "auto",
    textAlign: "center",
    borderRadius: 10,
  },

  nav: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#1F618D",
    padding: 10,
    marginBottom: 25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },

  input: {
    backgroundColor: "#F7FCF8",
    height: 30,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    padding: 5,
    borderRadius: 5,
  },

  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  login: {
    backgroundColor: "#1F618D",
    color: "#fff",
    padding: 10,
    marginTop: 15,
    fontWeight: "bold",
  },
  register: {
    marginTop: 10,
    marginBottom: 10,
  },
});
