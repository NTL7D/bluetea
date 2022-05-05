import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import { ItemList } from "../components/item/Item";
import { db } from "../firebase";

export const HomeScreen = () => {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    db.collection("banner")
      .get()
      .then((result) => result.docs)
      .then((docs) =>
        docs.map((doc) => ({
          image: doc.data().image,
        }))
      )
      .then((banner) => setBanner(banner));
  }, []);
  return (
    <View>
      <View>
        {banner?.map((banner) => (
          <Image style={styles.banner} source={banner.image} />
        ))}
      </View>
      <ItemList />
    </View>
  );
};
const styles = StyleSheet.create({
  banner: {
    width: "100%",
    height: 200,
  },
});
