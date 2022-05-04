import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  ScrollView,
  TextInput,
} from 'react-native';
import { RadioButton } from 'react-native-paper';
import { Cart } from '../components/cart/cart';

export const CartScreen = () => {
  return (
    <View>
      <Cart />
    </View>
  );
};
