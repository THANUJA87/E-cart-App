import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cartItems',
    initialState:[],
    reducers:{
        addCart:(state,actionByComponent)=>{
            const existingProduct = state.find(item=> item.id == actionByComponent.payload)
            if(existingProduct){

            }else{
                state.push({...actionByComponent.payload,quantity:1,totalAmount:actionByComponent.payload.price})
            }
        }

    }
})