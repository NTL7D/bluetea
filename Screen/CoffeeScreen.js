import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Coffee } from '../components/item/coffee';

export const CoffeeScreen = ({ title, price, navigation }) => {
  return (
    <ScrollView style={{width: "100%", height: 450}}>
      <View>
        <Coffee />
      </View>
    </ScrollView>
  );
};
