import React, { useEffect, useState } from "react";
import {Text, StyleSheet, ScrollView, View} from "react-native";
import { format } from "date-fns";
import {fr} from "date-fns/locale";
import Weather from "./weather";

export default function Forecasts({ data }){
    const [forecasts, setForecasts] = useState([])
    useEffect(()=> {
        const forecatsData = data.list.map(f => {
            const dt = new Date(f. dt * 1000)
            return({
                date: dt,
                hour: dt.getHours(),
                temp: Math.round(f.main.temp),
                icon: f.weather[0].icon,
                name: format(dt, "EEEE", { locale : fr})
            })
        })

        let newForcastsData = forecatsData.map(forecast => {
            return forecast.name
        }).filter((day, index, self) => {
            return self.indexOf(day) === index
        }).map((day) => {
            return{
                day,
                data: forecatsData.filter((forecast) => forecast.name === day)
            }
        })

        console.log(newForcastsData)

        setForecasts(newForcastsData)
    }, [data])
    return(
        <ScrollView
            horizontal
            showVerticalScrollIndicator={false}
            style={styles.scroll}
        >
            {forecasts.map(f => (
                <View>
                    <Text style={styles.day}>{f.day.toUpperCase()}</Text>
                    <View style={styles.container}>
                        {f.data.map(w => <Weather forecast={w} />)}
                    </View>
                </View>
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scroll:{
        width: "100%",
        height: "35%"
    },
    day:{
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10,
        marginLeft: 5
    },
    container:{
        flexDirection:"row",
        marginLeft: 5,
        marginRight: 15
    }
})