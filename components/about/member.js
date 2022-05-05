import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { db } from "../../firebase";

export const Member = () => {
  const [member, setMember] = useState([]);

  useEffect(() => {
    db.collection("member")
      .get()
      .then((result) => result.docs)
      .then((docs) =>
        docs.map((doc) => ({
          name: doc.data().name,
          email: doc.data().email,
          id: doc.data().id,
          image: doc.data().image,
        }))
      )
      .then((member) => setMember(member));
  }, []);

  return (
    <View style={styles.memContainer}>
      <Text style={styles.memNav}>Thông tin thành viên</Text>
      <ScrollView style={{ height: 300 }}>
        {member?.map((member) => (
          <View style={styles.memInfo}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text>{member.name}</Text>
                <Text>MSSV: {member.id}</Text>
                <Text>{member.email}</Text>
              </View>
              <Image
                source={member.image}
                style={{
                  width: 70,
                  height: 70,
                  backgroundColor: "white",
                  borderRadius: 5,
                }}
              />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  memContainer: {
    width: "90%",
  },

  memNav: {
    backgroundColor: "#1F618D",
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    width: "100%",
    padding: 10,
  },

  memInfo: {
    justifyContent: "space-between",
    margin: 5,
    padding: 15,
    borderRadius: 5,
    backgroundColor: "#A7C7E7",
  },
});
