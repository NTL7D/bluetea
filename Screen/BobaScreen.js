import React, { useState } from 'react';
import {
  ScrollView,
} from 'react-native';
import { Bobatea } from '../components/item/bobatea';

export const BobaScreen = ({ title, price, navigation }) => {
  return (
    <ScrollView style={{ width: '100%', height: 450}}>
        <Bobatea />
    </ScrollView>
  );
};
