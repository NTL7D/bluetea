import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
export const Coffee = ({ title, price, navigation }) => {
  const [menu, setMenu] = useState([
    {
      id: 1,
      name: 'Cà phê đá',
      price: 10000,
      src: require('../../assets/coffe/capheda.jpg'),
    },
    {
      id: 2,
      name: 'Cà phê sữa đá',
      price: 15000,
      src: require('../../assets/coffe/caphesua.jpg'),
    },
    {
      id: 3,
      name: 'Cà phê bạc xỉu',
      price: 15000,
      src: require('../../assets/coffe/bacxiu.jpg'),
    },
    {
      id: 4,
      name: 'Cà phê sữa cacao',
      price: 20000,
      src: require('../../assets/coffe/caphecacao.jpg'),
    },
  ]);

  return (
    <ScrollView style={styles.cfscreen}>
      {menu.map((item) => (
        <TouchableOpacity style={styles.itemList} onPress={() => navigation.push("Cart")}>
          <View>
            <View>
              <Image style={styles.itemImage} source={item.src} />
            </View>
          </View>
          <View>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemText}>{item.price + 'đ'}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cfscreen: {
    width: '100%',
    height: 500,
  },

  itemList: {
    flex: 1,
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
