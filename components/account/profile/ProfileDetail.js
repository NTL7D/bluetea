import React, {useState} from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../login/login"
export const ProfileDetail = ({ navigation }) => {
      
      const [order, setOrder] = useState([
    {
      name: 'Cà phê đá',
      price: 10000,
    },

  ]);

  return (
    <View style={styles.profile}>
      <View style={styles.avatar}>
        <Image />
      </View>
      <View style={styles.text}>
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.detail}>1996</Text>
        <Text style={styles.detailOrder}>Number of order: 1</Text>
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          style={styles.logout}
          onPress={() => {()=>navigation.goBack()}} >
          <Text
            style={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 18,
              marginTop: 2,
            }}>
            Đăng xuất
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    backgroundColor: '#A7C7E7',
    width: '90%',
    height: 250,
    borderRadius: 10,
  },

  avatar: {
    position: 'absolute',
    top: -80,
    left: 80,
    width: 150,
    height: 150,
    borderRadius: '50%',
    backgroundColor: '#000',
  },

  text: {
    textAlign: 'center',
    marginTop: 70,
  },

  name: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Times',
  },

  detail: {
    fontSize: 15,
    fontWeight: 400,
    opacity: '40%',
    marginTop: 15,
  },

  detailOrder: {
    fontSize: 15,
    fontWeight: 400,
    opacity: '40%',
    marginTop: 10,
  },

  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logout: {
    backgroundColor: '#1F618D',
    width: '120px',
    height: '40px',
    padding: 5,
    textAlign: 'center',
    borderRadius: 5,
  },
});
