import React,{useState,useEffect} from "react"
import { ActivityIndicator } from "react-native"
import { useNavigation } from "@react-navigation/native" 
export const useMeal=()=>{
 const [email,setEmail]=useState("")
    const [error,setError]=useState(null)
    const [data,setData]=useState(null)
    const [loading,setLoading]=useState(false)
    const fetchData=async()=>{
        try {
            setLoading(true)
            const res=await fetch("http://www.themealdb.com/api/json/v1/1/categories.php")
            const data=await res.json()
            setData(data)
        } catch (error) {
            console.error(error,"error fetching data")
        }finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
     fetchData()
    },[])
    return [loading,error,data]
}