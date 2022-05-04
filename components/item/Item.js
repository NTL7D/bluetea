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
import {NavigationContainer} from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { CoffeeScreen } from '../../Screen/CoffeeScreen';
import { BobaScreen } from '../../Screen/BobaScreen';
import { AllItem } from './all';

const Tab = createMaterialTopTabNavigator();

export const ItemList = ({ navigation }) => {

  return (
    <View>
          <NavigationContainer independent={true}>
        <Tab.Navigator>
          <Tab.Screen name="Tất cả" component={AllItem} />
          <Tab.Screen name="Cà phê" component={CoffeeScreen} />
          <Tab.Screen name="Trà sữa" component={BobaScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};