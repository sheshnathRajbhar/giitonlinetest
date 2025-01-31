import { createSlice } from "@reduxjs/toolkit";


export const questionSlice = createSlice({
   name:'questions',
   initialState:{
    questions:[]
   },
   reducers:{
    setData:(state, action)=>{
        state.questions = action.payload
    }
   }
})


export const {setData} = questionSlice.actions

export default questionSlice.reducer