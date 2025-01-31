import { createSlice } from "@reduxjs/toolkit";
import { questionSlice } from "./questionSlice";


export const resultSlice = createSlice({
    name:'result',
    initialState:{
        wrong:[],
        right:[],
        attemped:[],
        
    },
    reducers:{
        setWrong:(state, action)=>{
           let queId = action.payload
           state.wrong.push(queId)
        },
        setRight:(state, action)=>{
           let queId = action.payload
           state.right.push(queId)
        },
        setAttemped:(state, action)=>{
           let queId = action.payload
           state.attemped.push(queId)
        },
        

    }
})



export const {setRight, setWrong, setAttemped} = resultSlice.actions
export default questionSlice.reducer