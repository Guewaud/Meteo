import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import * as Location from "expo-location";
import axios from "axios";
//import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import CurrentWeather from "../components/CurrentWeather";
import Forecasts from "../components/Forecasts";
import Detail from "./Detail";
import { useNavigation } from "@react-navigation/native";
import FavButton from "../components/FavButton";

const API_URL = (lat, lon) =>
  `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=83fd24930f21f47970ebce9963b75953&lang=fr&units=metric`;
const Stack = createStackNavigator();

const Home = () => {
  //export default function(){
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const getCoordinates = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status != "granted") {
        //setPermissionDenied(true); // Mettre à jour le state si la permission est refusée
        return;
      }

      const userLocation = await Location.getCurrentPositionAsync();
      getWeather(userLocation);
    };

    getCoordinates();
  }, []);

  const getWeather = async (location) => {
    try {
      const response = await axios.get(
        API_URL(location.coords.latitude, location.coords.longitude)
      );
      setData(response.data);
      setLoading(false);
    } catch (e) {
      console.log("Erreur dans getWeather");
    }
  };

  const handleCurrentWeatherPress = (forecast) => {
    if (!forecast) {
      console.error("Prévision non définie");
      return;
    }

    console.log("Informations sur les prévisions sélectionnées :", forecast);
    navigation.navigate("Detail", {
      forecast,
      date: forecast.date,
      hour: forecast.hour,
      loc: {
        lat: forecast.lat,
        lon: forecast.lon,
      },
    });
  };
  // Si la localisation est en cours de chargement, afficher un message de chargement

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }

  // Une fois la localisation obtenue, afficher les coordonnées
  return (
    <View style={styles.container}>
      <CurrentWeather data={data} />
      <FavButton></FavButton>
      {/* <TouchableOpacity onPress={() => handleCurrentWeatherPress(data)}> */}
      <Forecasts data={data} />
      {/* </TouchableOpacity> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DEE9F1",
    alignItems: "center",
    justifyContent: "center",
  },
});
