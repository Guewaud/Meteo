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
        setForecasts(forecatsData)
    }, [data])
    return(
        <ScrollView
            horizontal
            showVerticalScrollIndicator={false}
            style={styles.scroll}
        >
            {forecasts.map(f => (
                <View>
                    <Text>{f.name}</Text>
                    <Weather forecast={f} />
                </View>
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scroll:{
        width: "100%",
        height: "35%"
    }
})