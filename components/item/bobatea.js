import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
export const Bobatea = ({ title, price, navigation }) => {
  const [menu, setMenu] = useState([
    {
      name: 'Trà sữa đen',
      price: 12000,
      src: require("../../assets/bobatea/trasuaden.jpg"),
    },
    {
      name: 'Trà sữa bạc hà',
      price: 15000,
      src: require("../../assets/bobatea/trasuabacha.jpg"),
    },
    {
      name: 'Trà sữa dâu',
      price: 15000,
      src: require("../../assets/bobatea/trasuadau.jpg"),
    },
    {
      name: 'Trà sữa cacao',
      price: 20000,
      src: require("../../assets/bobatea/trasuacacao.jpg"),
    },
    {
      name: 'Trà sữa đường đen',
      price: 20000,
      src: require("../../assets/bobatea/trasuaduongden.jpg"),
    }
  ]);

  return (
    <View style={styles.screen}>
      {menu.map((item) => (
        <TouchableOpacity style={styles.itemList}>
          <View>
            <Image style={styles.itemImage} source={item.src} />
          </View>
          <View>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemText}>{item.price + 'đ'}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: 620,
  },

  itemList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#A7C7E7',
  },

  itemImage: {
    width: 85,
    height: 80,
    backgroundColor: '#fff',
  },

  itemText: {
    textAlign: 'right',
    margin: 5,
  },
});
