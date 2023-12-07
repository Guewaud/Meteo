import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import * as Location from 'expo-location'
import React, { useEffect, useState } from 'react';
import axios from "axios"

import CurrentWeather from "./components/CurrentWeather";
import Forecasts from "./components/Forecasts";

const API_URL = (lat, lon) => `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=83fd24930f21f47970ebce9963b75953&lang=fr&units=metric`

export default function App() {

  // Récupérer les coordonnées du user
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  //const [permissionDenied, setPermissionDenied] = useState(false); // Etat pour gérer le refus de permission

  useEffect(() => {
    const getCoordinates = async () => {
      const {status} = await Location.requestForegroundPermissionsAsync();
      if (status != "granted"){
        //setPermissionDenied(true); // Mettre à jour le state si la permission est refusée
        return;
      }

      const userLocation = await Location.getCurrentPositionAsync();
      getWeather(userLocation);
    };

    getCoordinates();
  }, []);

  const getWeather = async (location) => {
    try{
      const response = await axios.get(API_URL(location.coords.latitude, location.coords.longitude));
      setData(response.data);
      setLoading(false)
    }catch(e){
      console.log("Erreur dans getWeather")
    }
    
  }

  // Si la localisation est en cours de chargement, afficher un message de chargement
  if(loading){
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
      <Forecasts>datat={data}</Forecasts>
    </View>
  );




  // // Fonction pour réessayer d'obtenir la permission de localisation
  // const retryLocation = async () => {
  //   const { status } = await Location.requestForegroundPermissionsAsync();
  //   if (status === 'granted') {
  //     const userLocation = await Location.getCurrentPositionAsync();
  //     setLocation(userLocation);
  //     setPermissionDenied(false);
  //   }
  // };

  // // Si la permission est refusée, afficher un message et un bouton pour réessayer

  // if (permissionDenied) {
  //   return (
  //     <View style={styles.container}>
  //       <Text>La localisation doit être activée pour le bon fonctionnement de l'application.</Text>
  //       <Button title="Autoriser la localisation" onPress={retryLocation} />
  //     </View>
  //   );
  // }

  // if (permissionDenied) {
  //   return (
  //     <View style={styles.container}>
  //       <Text>La localisation doit être activée pour le bon fonctionnement de l'application.</Text>
  //       <Button title="Réessayer" onPress={retryLocation} />
  //     </View>
  //   );
  // }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEE9F1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// function Video({ video }) {
//   return (
//     <div>
//       <Thumbnail video={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"} />
//       <a href={video.url}>
//         <h3>{video.title}</h3>
//         <p>{video.description}</p>
//       </a>
//       <LikeButton video={video} />
//     </div>
//   );
// }

      /* <Text>Open up App.js to start working on your app!</Text>
      <Text>Hello</Text>
      <StatusBar style="auto" /> */