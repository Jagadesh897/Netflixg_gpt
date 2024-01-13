import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowplayingMovies:null,
        trailervideo:null,

    },
    reducers:{
        addNowPlayingMovies : (state , action ) => {
            state.nowplayingMovies = action.payload;
        },
        addVideoTrailer : (state,action) => {
            state.trailervideo = action.payload;
        }
    }

});

export const {addNowPlayingMovies,addVideoTrailer} = moviesSlice.actions;
export default moviesSlice.reducer;