import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { isSameDay } from "date-fns";

const getIcon = (icon) => `https://openweathermap.org/img/wn/${icon}@4x.png`;

export default function CurrentWeather({ data }) {
  const [CurrentWeather, setCurrentWeather] = useState(null);

  useEffect(() => {
    const currentW = data.list.filter((forecast) => {
      const today = new Date().getTime() + Math.abs(data.city.timezone * 1000);
      const forecastDate = new Date(forecast.dt * 1000);
      return isSameDay(today, forecastDate);
    });
    setCurrentWeather(currentW[0]);
  }, [data]);

  const handleCurrentWeatherPress = () => {
    console.log("CurrentWeather test!");
   
  };

  return (
    <TouchableOpacity onPress={handleCurrentWeatherPress}>
      <View style={styles.container}>
        <Text style={styles.city}>{data?.city.name}</Text>
        <Text style={styles.today}>Aujourd'hui</Text>

        <Image
          //source={{ uri: CurrentWeather && CurrentWeather.weather && CurrentWeather.weather[0] && getIcon(CurrentWeather.weather[0].icon)}}
          source={{ uri: getIcon(CurrentWeather?.weather[0].icon) }}
          style={{ width: 150, height: 150 }}
        />

        <Text style={styles.temp}>
          {Math.round(CurrentWeather?.main.temp)}°C
        </Text>
        <Text style={styles.description}>
          {CurrentWeather?.weather[0].description}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const Color_Date = "#6333C9";

const styles = StyleSheet.create({
  container: {
    marginTop: 120,
    alignItems: "center",
    height: "55%",
  },
  city: {
    fontSize: 36,
    fontWeight: "500",
    color: Color_Date,
  },
  today: {
    fontSize: 24,
    fontWeight: "300",
    color: Color_Date,
  },
  image: {
    width: 150,
    height: 150,
    marginVertical: 20,
  },
  temp: {
    fontSize: 80,
    fontWeight: "bold",
    color: Color_Date,
  },
  description: {
    fontSize: 24,
    fontWeight: "bold",
    color: Color_Date,
  },
});
