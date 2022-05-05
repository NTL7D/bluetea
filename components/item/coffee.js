import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { db } from "../../firebase";
export const Bobatea = () => {
  const [bobatea, setBobaTea] = useState([]);

  useEffect(() => {
    db.collection("bobatea")
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
      .then((bobatea) => setBobaTea(bobatea));
  }, []);

  return (
    <View style={styles.screen}>
      {bobatea?.map((bobatea) => (
        <TouchableOpacity
          style={styles.itemList}
          onPress={() => alert("Thêm món thành công!")}
        >
          <View>
            <View>
              <Image style={styles.itemImage} source={bobatea.image} />
            </View>
          </View>
          <View>
            <Text style={styles.itemText}>{bobatea.name}</Text>
            <Text style={styles.itemText}>{bobatea.price + "đ"}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: 660,
  },

  itemList: {
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
