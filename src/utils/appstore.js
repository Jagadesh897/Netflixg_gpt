import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userslice"
const appstore = configureStore(
    {
        reducer:{
            user:userReducer,
            
        },
    }
);

export default appstore;