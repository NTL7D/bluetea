import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export const Cart = () => {
  const [count, setCount] = useState(1);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.nav}>Thanh toán</Text>
      <ScrollView style={{ width: "100%", height: 100, marginLeft: 20 }}>
        <View style={styles.item}>
          <View style={styles.itemName}>
            <Text>Cà phê đá</Text>
          </View>
          <View>
            <Text>15000đ</Text>
          </View>
          <View style={styles.itemCount}>
            <TouchableOpacity
              style={{ textAlign: "center" }}
              onPress={increase}
            >
              +
            </TouchableOpacity>
            <Text style={{ paddingLeft: 10, paddingRight: 10 }}>{count}</Text>
            <TouchableOpacity
              style={{ textAlign: "center" }}
              onPress={decrease}
              disabled={count === 1}
            >
              -
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text>Xoá</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.line}></View>
      <View style={styles.total}>
        <Text
          style={{
            marginTop: 5,
            textAlign: "right",
            fontWeight: "bold",
            fontSize: 14,
            color: "#154360",
          }}
        >
          Tổng cộng:{" "}
        </Text>
        <Text
          style={{
            textAlign: "right",
            marginTop: 5,
            marginRight: 5,
            fontWeight: "bold",
            fontSize: 24,
            color: "#154360",
          }}
        >
          {15000 * count} đồng
        </Text>
        <View>
          <TouchableOpacity
            style={styles.paymentButton}
            onPress={() => {
              alert("Thanh toán thành công");
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
              Thanh toán
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    height: "auto",
  },

  nav: {
    backgroundColor: "#1F618D",
    color: "#fff",
    padding: 20,
    width: "100%",
    fontSize: 20,
    fontWeight: "bold",
  },

  item: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#A7C7E7",
    width: "95%",
    marginTop: 10,
    padding: 20,
    borderRadius: 10,
  },

  itemName: {
    height: 10,
  },

  itemCount: {
    flexDirection: "row",
  },

  line: {
    marginTop: 340,
    backgroundColor: "#000",
    width: "97%",
    height: 1,
  },

  total: {
    backgroundColor: "#A7C7E7",
    width: "100%",
    height: 200,
    padding: 20,
    marginTop: 20,
  },

  paymentButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#1F618D",
    marginTop: 50,
    borderRadius: 10,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});
