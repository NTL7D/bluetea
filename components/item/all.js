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
import { Coffee } from './coffee';
import { Bobatea } from './bobatea';

export const AllItem = ({ title, price, navigation }) => {
  return (
    <ScrollView style={{ height: 100 }} horizontal={false}>
        <Coffee />
        <Bobatea />
    </ScrollView>
  );
};
