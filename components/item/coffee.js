import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { db } from "../../firebase";
export const Coffee = () => {
  const [coffee, setCoffee] = useState([]);

  useEffect(() => {
    db.collection("coffee")
      .get()
      .then((result) => result.docs)
      .then((docs) =>
        docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          price: doc.data().price,
          image: doc.data().image,
        }))
      )
      .then((coffee) => setCoffee(coffee));
  }, []);
  return (
    <ScrollView style={styles.cfscreen}>
      {coffee?.map((coffee) => (
        <TouchableOpacity
          style={styles.itemList}
          onPress={() => alert("Thêm món thành công!")}
        >
          <View>
            <View>
              <Image style={styles.itemImage} source={coffee.image} />
            </View>
          </View>
          <View>
            <Text style={styles.itemText}>{coffee.name}</Text>
            <Text style={styles.itemText}>{coffee.price + "đ"}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cfscreen: {
    width: "100%",
    height: 480,
  },

  itemList: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
    padding: 15,
    borderRadius: 5,
    backgroundColor: "#A7C7E7",
  },

  itemImage: {
    width: 85,
    height: 80,
    backgroundColor: "#fff",
    borderRadius: 5,
  },

  itemText: {
    textAlign: "right",
    margin: 5,
  },
});
