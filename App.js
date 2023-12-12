
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Login from './screens/Login';
import Home from './screens/Home';


//const Stack = createNativeStackNavigator();
const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown : false}} name="test" component={Login} />
        <Stack.Screen options={{ headerShown : false}} name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}