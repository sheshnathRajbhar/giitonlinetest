import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setData } from "../store/questionSlice"

export const useFetchData = ()=>{

const dispatch = useDispatch()
    useEffect(()=>{
        (async()=>{
           await axios.get("https://giitonlinetest-2.onrender.com/api/v1/question")
            .then((response)=>dispatch(setData(response.data)))
            .catch((error)=>{
                throw new Error("No question Aviable")
            })
        })()
    },[dispatch])
}
