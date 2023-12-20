import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import Favoris from "../screens/Favoris";
import { isSameDay } from "date-fns";

export default function FavButton({ }){
    const navigation = useNavigation();

    const handlePress = () => {
        
    const storeData = async (nouvFav) => {
        try {
            const value = await AsyncStorage.getItem('@ville')
            if(value !== null) {
              console.log("value = " + value);
              try {
                await AsyncStorage.setItem('@ville',[[value] + ["toulouse"]])
                } catch (e) {
                // lance une erreur
                console.log("erreur", e)
                }
            }
          } catch(e) {
            // lance une erreur
            console.log("erreur", e)
          }
        
    }
        storeData();
    };
    
    const handlePress2 = () => {
       
        const getData = async () => {
            try {
              const value = await AsyncStorage.getItem('@ville')
              if(value !== null) {
                console.log("value = " + value);
              }
            } catch(e) {
              // lance une erreur
              console.log("erreur", e)
            }
            
          }
          
          getData();
        };

    const handlePress3 = () => {
        navigation.navigate("Favoris")
    }
    
    
    return(
        <View >
            
            <Text>LE BOUTON LA</Text>
            <TouchableOpacity onPress={handlePress}>
                <Image 
                    //source={{ uri: CurrentWeather && CurrentWeather.weather && CurrentWeather.weather[0] && getIcon(CurrentWeather.weather[0].icon)}}
                    source={require('../assets/heart.png')}
                    style={styles.image}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePress2}>
                <Image 
                    //source={{ uri: CurrentWeather && CurrentWeather.weather && CurrentWeather.weather[0] && getIcon(CurrentWeather.weather[0].icon)}}
                    source={require('../assets/heart.png')}
                    style={styles.image}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePress3}>
                <Image 
                    //source={{ uri: CurrentWeather && CurrentWeather.weather && CurrentWeather.weather[0] && getIcon(CurrentWeather.weather[0].icon)}}
                    source={require('../assets/heart.png')}
                    style={styles.image}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        width: 50,
        height: 50
    },
    temp:{
        fontSize: 18,
        fontWeight: "bold"
    }
})