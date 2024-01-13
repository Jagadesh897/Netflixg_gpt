import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userslice"
import moviesReducer from "./moviesSlice";
const appstore = configureStore(
    {
        reducer:{
            user: userReducer,
            movies : moviesReducer,
            
        },
    }
);

export default appstore;