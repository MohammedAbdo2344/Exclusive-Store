import { configureStore } from "@reduxjs/toolkit";
import DataReducer from "./DataSlice";
import cartReducer from "./cartSlice";
export const Store =configureStore({
    reducer:{
        data:DataReducer,
        cart:cartReducer
    },
});

export type RooState =ReturnType<typeof  Store.getState>;
export type AppDispatch=typeof Store.dispatch;