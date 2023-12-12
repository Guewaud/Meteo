import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from 'Login';
import Home from 'Home';
import Ionicon from 'react-native-vector-icon/Ionicon'

const tab = createBottomTabNavigator();

function accuellScreen() {
    return(
    <View style={StyleSheet.container}>
        <Text>opppe</Text>
    </View>);
}

export default function Nav() {
return(
    <NavigationContainer>
    <tab.Navigator
        ScreenOptions={({route}) => ({
            tabBarIcon:({focused, color, size}) =>{
                let iconName;
                if (route.name == "Home") {
                    iconName = 'home'
                }else if (route.name == "déconnection") {
                    iconName = 'trash-bin'
                }else if (route.name == "forecasts") {
                    iconName = 'sunny'
                }else if (route.name == "meteolocal") {
                    iconName = 'partly-sunny'
                }
            }
        })}>

    <tab.Screen name="Home" component={Home}/>
    {/*<tab.Screen name="déconnection" component={disconnect}/>*/}
    {/*<tab.Screen name="forecasts" component={forecasts}/>*/}
    {/*<tab.Screen name="meteolocal" component={meteolocal}/>*/}
    </tab.Navigator>
    </NavigationContainer>
);

}