
import React,{useState} from "react"
import {View,Text,StyleSheet,SafeAreaView,StatusBar,FlatList,ImageBackground,Modal,TouchableOpacity} from "react-native"
import {Data} from "../api/homeApi"
import { MaterialCommunityIcons } from '@expo/vector-icons'
import BouncingArrow from "../arror/arror"
import Email from "./email"
import { ActivityIndicator } from "react-native"
const Home=()=>{
    const [press,setPress]=useState(false)
    const [mode,setMode]=useState(false)
    const handlePress=()=>{
        setPress(!press)
    }
    const style=StyleSheet.create({
     container:{
        flex:1,
        marginTop:StatusBar.currentHeight||0
     },
     image:{
        height:"100%",
        flex:1,
        alignItems:"center",
        justifyContent:"center",
     },
     contain:{
        flexDirection:"row",
        
        alignItems:"center"
     },
     text:{
        fontSize:15,
     },
     opas:{
        width:"30%",
        height:"13%",
        alignItems:"center",
        justifyContent:"center"
     },
     overlay:{
        //...StyleSheet.absoluteFillObject,
        //backgroundColor:"rgba(0,0,0,0.4)"
      },
     nuel:{
        flexDirection:"row",
     },
     d:{
       fontWeight:"bold",
       fontSize:20,
       marginBottom:0
     },
     mate:{
        flexDirection:"row"
     }
})
    return(
        <SafeAreaView style={style.container}>     
            <ImageBackground source={require("../images/chef.jpg")} style={style.image}> 
                <TouchableOpacity style={[style.opas,press?{backgroundColor:"rgba(0,0,0,0.5)",height:"100%",width:"100%"}:null]}  onPress={()=>{setMode(true);handlePress}}>
                    <Email visible={mode}/>
                    <View style={style.mate}>
            <MaterialCommunityIcons name="food-turkey" size={80} color="black" />
            <View style={style.nuel}><Text style={style.d}>D</Text><Text>.nuel</Text></View>
            </View>
            </TouchableOpacity>
            <View style={style.overlay}/>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Home