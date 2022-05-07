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

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const navigation = useNavigation();

  const handleRegister = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registered with:", user.email);
        navigation.navigate("Login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.nav}>Đăng kí tài khoản</Text>
        <View style={{ justifyContent: "center", marginTop: 10 }}>
          <TextInput
            value={name}
            onChangeText={(text) => setName(text)}
            style={styles.input}
            placeholder="Tên người dùng"
          ></TextInput>
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
            placeholder="Email"
          ></TextInput>
          <TextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
            placeholder="Mật khẩu"
            secureTextEntry={true}
          ></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Xác nhận Mật khẩu"
            value={confirm}
            onChangeText={(text) => setConfirm(text)}
            secureTextEntry={true}
          ></TextInput>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.login} onPress={() => handleRegister()}>
              Đăng kí
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.register}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={{ opacity: "40%" }}>Đã có tài khoản?</Text>
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
