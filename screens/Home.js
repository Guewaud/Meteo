import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location'
import axios from "axios"
//import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CurrentWeather from "../components/CurrentWeather";
import Forecasts from "../components/Forecasts";



const API_URL = (lat, lon) => `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=83fd24930f21f47970ebce9963b75953&lang=fr&units=metric`
const Stack = createStackNavigator();



const Home = () => {
//export default function(){
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

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
        <Forecasts data={data} />
        </View>
    );
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DEE9F1',
        alignItems: 'center',
        justifyContent: 'center',
    },
})




// import React, { useEffect, useState } from 'react';
// import { StyleSheet, View, ActivityIndicator} from 'react-native';
// import * as Location from 'expo-location'
// import axios from "axios"
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { firebase } from './config';

// // import Forecasts from "./components/Forecasts";

// const API_URL = (lat, lon) => `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=83fd24930f21f47970ebce9963b75953&lang=fr&units=metric`
// const Stack = createStackNavigator();



// export default function App() {

//   // Récupérer les coordonnées du user
//   const [loading, setLoading] = useState(true);
//   const [data, setData] = useState(null);
//   const [user, setUser] = useState(null);
//   //const [permissionDenied, setPermissionDenied] = useState(false); // Etat pour gérer le refus de permission

  
//   useEffect(() => {
//     // Vérifier si un utilisateur est déjà connecté
//     const unsubscribe = firebase.auth().onAuthStateChanged(currentUser => {
//       setUser(currentUser);
//       setLoading(false);
//     });

//     return unsubscribe; // Nettoyer l'abonnement à la fin de l'effet
//   }, []);


//   useEffect(() => {
//     const getCoordinates = async () => {
//       const {status} = await Location.requestForegroundPermissionsAsync();
//       if (status != "granted"){
//         //setPermissionDenied(true); // Mettre à jour le state si la permission est refusée
//         return;
//       }

//       const userLocation = await Location.getCurrentPositionAsync();
//       getWeather(userLocation);
//     };

//     getCoordinates();
//   }, []);

//   const getWeather = async (location) => {
//     try{
//       const response = await axios.get(API_URL(location.coords.latitude, location.coords.longitude));
//       setData(response.data);
//       setLoading(false)
//     }catch(e){
//       console.log("Erreur dans getWeather")
//     }
    
//   }

//   // Si la localisation est en cours de chargement, afficher un message de chargement
//   if(loading){
//     return (
//     <View style={styles.container}>
//       <ActivityIndicator />
//     </View>
//     );
//   }


//   if (!user) { // Si l'utilisateur n'est pas connecté, afficher les pages d'authentification
//     return (
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen name="Connexion" component={SignIn} />
//           <Stack.Screen name="Inscription" component={SignUp} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     );
//   }


//   // Une fois la localisation obtenue, afficher les coordonnées
//   return (
//     <View style={styles.container}>
//       <CurrentWeather data={data} />
//       {/* <Forecasts datat={data} /> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#DEE9F1',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
