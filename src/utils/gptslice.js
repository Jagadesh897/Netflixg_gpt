import { createSlice } from "@reduxjs/toolkit";

const gptslice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch : false,
        movieResults:null,
        movieNames:null,
        
    },
    reducers:{
        toggleGptSearchView: (state,action) => {
            state.showGptSearch = !state.showGptSearch
        },
        addGptMovieResults: (state,action) => {
            const { movieNames , movieResults} = action.payload
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
    },
});
export const {toggleGptSearchView , addGptMovieResults} = gptslice.actions;
export default gptslice.reducer;