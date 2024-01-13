/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovis'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';



const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div>
      <Header/>
      {/*
        Maincontainer
          -video Background 
          -videoTitle
        SecondaryConatainer
          -MovieList * n
          -Cards * n
    */}
     <MainContainer/>
     <SecondaryContainer/>
    </div>
  )
}

export default Browse