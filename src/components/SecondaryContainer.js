import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies)
 
  return (
    <div className='bg-black'>
      <div className=' mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowplayingMovies}/>
      <MovieList title={"Popular"} movies={movies.PopularMovies}/>
      <MovieList title={"Trending"} movies={movies.nowplayingMovies}/>
      <MovieList title={"Horror"} movies={movies.nowplayingMovies}/>
      <MovieList title={"Comedy"} movies={movies.nowplayingMovies}/>
      </div>
      {/*
    movielist- Popular
      -moviecard *n
    movielist - Now playing
    movielist - Trending
    movielist - Hrror
    */}
      </div>
  )
}

export default SecondaryContainer