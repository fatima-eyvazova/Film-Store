import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../redux/reducer'
import React from 'react'

const store = configureStore({
  reducer: {
    cart: cartReducer
  }
})

export default store