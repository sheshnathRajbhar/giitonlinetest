
import { configureStore } from "@reduxjs/toolkit";
import { modeSlice } from "./modeSlice";
import { questionSlice } from "./questionSlice";
import { resultSlice } from "./resultSlice";

export const store = configureStore({
   reducer:{
    mode: modeSlice.reducer, 
    questions:questionSlice.reducer,
    result:resultSlice.reducer,
   }
})