import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowplayingMovies:null,
        PopularMovies:null,
        trailervideo:null,

    },
    reducers:{
        addNowPlayingMovies : (state , action ) => {
            state.nowplayingMovies = action.payload;
        },
        addPopularMovies : (state , action ) => {
            state.PopularMovies = action.payload;
        },
        addVideoTrailer : (state,action) => {
            state.trailervideo = action.payload;
        }
    }

});

export const {addNowPlayingMovies,addVideoTrailer,addPopularMovies} = moviesSlice.actions;
export default moviesSlice.reducer;