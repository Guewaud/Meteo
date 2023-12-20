import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Detail = ({ route }) => {
  console.log("Data in Detail:", route.params.forecast);

  const { day, hour, temp, icon, name } = route.params.forecast;
  const date = route.params.forecast.date;
  const dt = route.params.dt;

  return (
    <View style={styles.container}>
      <View style={styles.infoBox}>
        <Text style={styles.city}>{route.params.forecast.city.name}</Text>
        <Text>{`Date: ${date}`}</Text>
        <Text>{`DT: ${dt}`}</Text> {/* Ajoutez cette ligne pour afficher dt */}
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

export default Detail;
