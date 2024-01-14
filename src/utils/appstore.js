import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userslice"
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptslice";
import configReducer from "./configslice";
const appstore = configureStore(
    {
        reducer:{
            user: userReducer,
            movies : moviesReducer,
            gpt: gptReducer,
            config : configReducer
            
        },
    }
);

export default appstore;