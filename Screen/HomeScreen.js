import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native';
import { ItemList } from '../components/item/Item';

export const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <View style={styles.banner}>
        <View style={{ color: 'white', textAlign: 'center' }}>
          <Text>Banner section</Text>
        </View>
        <Image style={styles.banImage}></Image>
      </View>
      <ItemList />
    </View>
  );
};
const styles = StyleSheet.create({


  banner: {
    width: '100%',
    height: 140,
    backgroundColor: '#89938C',
  },

});
