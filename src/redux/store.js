import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart/reducer'
import filmsReducer from './films/reducer'
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}
const reducer = combineReducers({
  cart: cartReducer,
  films: filmsReducer

})
const persistedReducer = persistReducer(persistConfig, reducer)


const store = configureStore({
  reducer: persistedReducer

})


export default store