import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RetourBouton from "../components/Retourbouton";

const getIcon = (icon) => `https://openweathermap.org/img/wn/${icon}@4x.png`;

const Detail = ({ route }) => {
  console.log("Data in Detail:", route.params.forecast);

  const { day, hour, temp, name } = route.params.forecast;
  const date = route.params.forecast.list[0].dt_txt;
  const wind = route.params.forecast.list[0].wind.speed;
  const humidity = route.params.forecast.list[0].main.humidity;
  const temperature = route.params.forecast.list[0].main.temp;

  return (
    <View style={styles.container}>
      <RetourBouton />

      <View style={styles.infoBox}>
        <Text style={styles.city}>{route.params.forecast.city.name}</Text>
        <Text>{date}</Text>
        <Text>{day}</Text>
        <Image
          source={{
            uri: getIcon(route.params.forecast.list[0].weather[0].icon),
          }}
          style={{ width: 150, height: 150 }}
        />
        <View style={styles.windContainer}>
          <Image
            source={require("../assets/temperature.png")}
            style={styles.image2}
          />

          <Text>{temperature}°C</Text>
        </View>

        <View style={styles.windContainer}>
          <Image source={require("../assets/vent.png")} style={styles.image} />
          <Text>{wind}Km/H</Text>
        </View>
        <View style={styles.windContainer}>
          <Image
            source={require("../assets/humidity.png")}
            style={styles.image2}
          />
          <Text>{humidity}%</Text>
        </View>

        {/* <Text>{hour}h</Text>
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
    alignItems: "center",
  },
  windContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoBox: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    minHeight: 300,
    minWidth: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  city: {
    fontSize: 36,
    fontWeight: "500",
    color: "#6333C9",
  },
  image: {
    width: 50,
    height: 50,
  },
  image2: {
    width: 40,
    height: 40,
    
  },
  weatherIcon: {
    width: 50,
    height: 50,
  },
});

export default Detail;
