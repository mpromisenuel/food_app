import React,{useState} from "react"
import {View,StyleSheet } from 'react-native';
import Home from './component/start/home';
import Email from "./component/start/email"
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack=createStackNavigator()
export default function App() {
  return (
    <NavigationContainer style={style.container}>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Email" component={Email}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}


const style=StyleSheet.create({
  container:{
    flex:1
  }
})
