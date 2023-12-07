import React, { useEffect, useState } from "react";
import {View, Text, StyleSheet} from "react-native";
import { format } from "date-fns";
import {fr} from "date-fns/locale";

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
    },[data])
    return(
        <View>
            {forecasts.map(f => (
                <>
                <Text>{f.name}</Text>
                <Text>{f.hour}</Text>
                <Text>{f.temp}</Text>
                </>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({

})