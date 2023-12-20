import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Favoris = ({}) => {

  return (
    <View style={styles.container}>
      <View style={styles.infoBox}>
        <Text style={styles.city}>KOUKOU</Text>

        {/* <Text>{name}</Text>
        <Text>{hour}h</Text>
        <Text>{temp}°C</Text>
        <Text>{day}</Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DEE9F1",
  },
  infoBox: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  city: {
    fontSize: 36,
    fontWeight: "500",
    color: "#6333C9",
  },
});

export default Favoris;