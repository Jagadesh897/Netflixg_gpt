/* eslint-disable no-whitespace-before-property */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovis'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';



const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  const showgptsearch = useSelector(store => store.gpt?. showGptSearch)
  return (
    <div>
      <Header/>
      {showgptsearch ? (<GptSearch/>):
      (<>
        <MainContainer/>
        <SecondaryContainer/>
        </>
      )}
    
     {/*
        Maincontainer
          -video Background 
          -videoTitle
        SecondaryConatainer
          -MovieList * n
          -Cards * n
    */}
    </div>
  )
}

export default Browse