import React from 'react'
import { IMG_CND_URL } from '../utils/constant'

const MovieCard = ({poster_path}) => {
  if(!poster_path) return null;
  return (
    <div className='w-48 pr-4'>
        <img alt='Img_url'
        src={IMG_CND_URL+poster_path}
        />
    </div>
  )
}

export default MovieCard