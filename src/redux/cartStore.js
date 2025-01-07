import { configureStore } from "@reduxjs/toolkit";
import productSlice from './slices/productSlices'
const cartStore=configureStore({
    reducer:{
        productReducer:productSlice
    }
})

export default cartStore