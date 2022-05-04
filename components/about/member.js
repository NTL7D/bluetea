import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

export const Member = () => {
  const [member, setMember] = useState([
    {
      name: "Tăng Cảnh Phong",
      id: "1900009080",
    },
    {
      name: "Nguyễn Thanh Long",
      id: "1900008795",
    },
    {
      name: "Nguyễn Hoàng Trung",
      id: "1911549005",
    },
    {
      name: "Hàng Nguyên Trạch",
      id: "1911548449",
    },
  ]);

  return (
    <View style={styles.memContainer}>
      <Text style={styles.memNav}>Thông tin thành viên</Text>
      <ScrollView style={{ height: 200 }}>
        {member.map((item) => (
          <View style={styles.memInfo}>
            <View>
              <Text>{item.name}</Text>
              <Text>{item.id}</Text>
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
