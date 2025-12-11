import { createSlice } from "@reduxjs/toolkit";
interface Phone {
    info:{}[],
    isLoading:boolean,
    error:string | null
}
const initialState : Phone = {
    info:[],
    isLoading:false ,
    error:null
}
const PhoneSlice = createSlice({
name:"phone",
initialState,
reducers:{
    
}
})