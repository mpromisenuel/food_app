import React,{useState} from "react"
import {View,Text,StatusBar,SafeAreaView,StyleSheet,TextInput,Button,TouchableOpacity,Alert,Modal,ImageBackground,ActivityIndicator} from "react-native"
import { BlurView } from "expo-blur";
import { NavigationContainer } from '@react-navigation/native';
import {useNavigation} from "@react-navigation/native"
import {useMeal} from "../useMeal"
const Email=({visible})=>{
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [loading,error,data]=useMeal()
    console.log(data)
    //const [background,setBackground]=useState(true)
    const style=StyleSheet.create({
      container:{
        flex:1,
      },
      blur:{
         width:"90%",
         maxWidth:"100%",
         flex:1,
         justifyContent:"center",
         alignItems:"center",
         maxHeight:"60%",
      },
      input:{
        width:"80%",
        height:50,
        borderWidth:1,
        marginBottom:20,
        padding:10,
        margin:10
      },
      logIn:{
        backgroundColor:"#006a4e",
        padding:10,
        borderRadius:15,
        width:"80%",
        alignItems:"center"
      },
      text:{
        alignItems:"center"
      },
      image:{
        height:"100%",
        alignItems:"center",
        justifyContent:"center",
      },
      overlay:{
        //...StyleSheet.absoluteFill,
       // backgroundColor:"rgba(0,0,0,0.6)"
      }

})

//const [loading,setLoading]=useState(false)
const navigation=useNavigation()
    const textInputSubmit=()=>{
      if (!email&&!password) {
        Alert.alert("you have not entered your details")
      }else if(!email){
        Alert.alert("you havent entered your email")
      }
      else if(!password){
        Alert.alert("you have not entered your password")
      }
     else{
       setLoading(true)

       setTimeout(() => {
        setLoading(false)
        navigation.navigate("Home")
       }, 2000);
      }
    }
    
    
    return(
        <SafeAreaView stle={style.container}>
                <Modal visible={visible} animationType="slide">
                    <ImageBackground source={require("../images/chef.jpg")} style={style.image}>
                       <BlurView tint="light" intensity={40} style={style.blur}>
            <Text>D.nff</Text>
            <TextInput placeholder="email" style={style.input} onChangeText={(text)=>setEmail(text)} value={email}/>
            <TextInput placeholder="password" style={style.input} onChangeText={(text)=>setPassword(text)} value={password} secureTextEntry={true}/>
                <TouchableOpacity onPress={textInputSubmit} style={style.logIn}>
                <Text style={style.text}>Log in</Text>
                </TouchableOpacity>
                {loading&&<ActivityIndicator size={50} color={"green"}/>}
                </BlurView>
                <View style={style.overlay}/>
                </ImageBackground>
                </Modal>
            </SafeAreaView>
        
    )
}
export default  Email
