import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal,
  Pressable,
} from "react-native";
import { db } from "../../../firebase";
export const OrderDetail = ({ navigation }) => {
  const [isvisible, setIsvisible] = useState(false);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    db.collection("order")
      .get()
      .then((result) => result.docs)
      .then((docs) =>
        docs.map((doc) => ({
          name: doc.data().name,
          price: doc.data().price,
          order: doc.data().order,
          status: doc.data().status,
        }))
      )
      .then((order) => setOrder(order));
  }, []);

  return (
    <View style={styles.orderNav}>
      <Text style={styles.orderText}>Danh sách đặt hàng:</Text>
      <Modal transparent visible={isvisible}>
        <View style={styles.centeredView}>
          <View style={styles.detailContainer}>
            <Text
              style={{
                backgroundColor: "#1F618D",
                width: "100%",
                padding: 15,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                textAlign: "center",
                fontSize: 20,
                fontWeight: "bold",
                color: "white",
              }}
            >
              Thông tin đơn hàng:
            </Text>
            <View style={{ padding: 20 }}>
              <View>
                <Text style={{ marginBottom: 20 }}>Đơn hàng số 01:</Text>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text>Cà phê đá</Text>
                  <Text>10000 đồng</Text>
                </View>
                <View>
                  <View style={styles.line}></View>
                  <Text style={{ textAlign: "right", marginTop: 8 }}>
                    trạng thái: Đã thanh toán
                  </Text>
                  <Text style={{ textAlign: "right", marginTop: 5 }}>
                    Tổng cộng: 10000 đồng
                  </Text>
                </View>
              </View>
              <Pressable
                style={[styles.closeButton]}
                onPress={() => setIsvisible(!isvisible)}
              >
                <Text style={{ fontWeight: "bold", color: "white" }}>Đóng</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <ScrollView style={styles.orderItem}>
        {order?.map((order) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => setIsvisible(!isvisible)}
          >
            <Text style={styles.itemName}>{order.name}</Text>
            <Text style={styles.itemPrice}>{order.price} đồng</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  orderNav: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
    width: "90%",
  },

  orderText: {
    backgroundColor: "#1F618D",
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    width: "100%",
    padding: 10,
  },

  orderItem: {
    width: "100%",
    height: 1000,
  },

  itemContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: 60,
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#A7C7E7",
  },

  itemName: {
    textAlign: "left",
    margin: 10,
  },

  itemPrice: {
    textAlign: "right",
    margin: 10,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

  detailContainer: {
    backgroundColor: "#A7C7E7",
    borderRadius: 10,
    width: "80%",
    height: "auto",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  closeButton: {
    backgroundColor: "#1F618D",
    textAlign: "center",
    borderRadius: 5,
    marginTop: 10,
    padding: 10,
  },

  line: {
    backgroundColor: "#000",
    height: 1,
    marginTop: 70,
  },
});
