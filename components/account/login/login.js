import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  query,
  where,
  collection,
  getDocs,
} from "firebase/firestore";
import "firebase/app";
import { app } from "../../../firebase";

export const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const auth = getAuth();
    const db = getFirestore(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //sign in
        const user = userCredential.user;
        const usersRef = collection(db, "users");
        getDoc(user.uid).then((response) => {
          console.log(response)
          navigation.navigate("Home");
        });
        console.log(user);
      }).catch((error) => {
          const errorCode = error.code;
          const errorMsg = error.message;
          alert(errorMsg);
        });
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.nav}>Đăng nhập</Text>
        <View style={{ justifyContent: "center", marginTop: 10 }}>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={(e) => setEmail(e)}
            placeholder="Tên đăng nhập"
          ></TextInput>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={(v) => setPassword(v)}
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
