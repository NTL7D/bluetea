import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { ProfileDetail } from './ProfileDetail';
import { OrderDetail } from './OrderDetail';

export const Profile = () => {
  return (
    <View style={styles.container}>
      <ProfileDetail />
      <OrderDetail />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 90,
    width: '100%',
    height: '100%',
    backgroundColor: '#F7FCF8',
  },
});
