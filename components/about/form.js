import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export const Form = () => {
  return (
    <View style={styles.formContainer}>
        <Text style={{fontSize: 20, textAlign: "center", fontWeight: "bold", marginBottom: 25, padding: 7, backgroundColor: "#1F618D", color: "#fff",borderTopLeftRadius: 7, borderTopRightRadius: 10}}>Bạn muốn góp ý?</Text>
        <TextInput style={styles.input} placeholder="Họ tên"></TextInput>
        <TextInput style={styles.input} placeholder="Email"></TextInput>
        <Text style={{marginLeft: 10}}>Nội dung bạn muốn góp ý:</Text>
        <TextInput style={styles.form} multiline = {true} numberOfLines = {4}></TextInput>
        <TouchableOpacity style={styles.submit}>
          <Text style={{fontSize: 15, fontWeight: "bold", color: "#fff"}}>Gửi</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    width: "90%",
    backgroundColor: '#A7C7E7',
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 20
  },

  input: {
    margin: 5,
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#F7FCF8',
  },

  form: {
        margin: 5,
    padding: 5,
        borderRadius: 5,
    backgroundColor: '#F7FCF8',
  },

  submit: {
    alignItems: "center",
    margin: 10,
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#1F618D',
  },
});