import { configureStore } from "@reduxjs/toolkit";
import productSlice from './slices/productSlices'
import wishlistSlice from './slices/WishlistSlice'

const cartStore=configureStore({

    reducer:{
        productReducer:productSlice,
        wishlistReducer:wishlistSlice
    }
})

export default cartStore