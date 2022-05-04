import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

import "firebase/app";

export const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birth, setBirth] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleRegister = () => {
    if (password !== confirm) {
      alert("Vui lòng nhập lại mật khẩu chính xác");
      return;
    }

    const db = getFirestore(app);

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        const data = {
          id: user.uid,
          email,
          name,
          birth,
        };
        addDoc(collection(db, "users"), data)
          .then(() => {
            navigation.navigate("Login", { user: data });
          })
          .catch((err) => alert(err));
      })
      .catch((err) => {
        const errorCode = error.code;
        const errorMsg = err.message;
        alert(errorMsg);
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.nav}>Đăng kí tài khoản</Text>
        <View style={{ justifyContent: "center", marginTop: 10 }}>
          <TextInput
            value={name}
            onChangeText={(v) => setName(v)}
            style={styles.input}
            placeholder="Tên người dùng"
          ></TextInput>
          <TextInput
            value={email}
            onChangeText={(e) => setEmail(e)}
            style={styles.input}
            placeholder="Email"
          ></TextInput>
          <TextInput
            value={birth}
            onChangeText={(v) => setBirth(v)}
            style={styles.input}
            placeholder="Năm sinh"
          ></TextInput>
          <TextInput
            value={password}
            onChangeText={(v) => setPassword(v)}
            style={styles.input}
            placeholder="Mật khẩu"
            secureTextEntry={true}
          ></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Xác nhận Mật khẩu"
            value={confirm}
            onChangeText={(v) => setConfirm(v)}
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
