/* eslint-disable no-template-curly-in-string */
/* eslint-disable react-hooks/exhaustive-deps */
import  { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant';
import { addVideoTrailer } from '../utils/moviesSlice';
import { useDispatch, useSelector } from 'react-redux';

const useMovieTrailer = (movie_id) => {
    const dispatch = useDispatch();
    const trailervideo = useSelector((store) => store.movies?.trailervideo)
  
    const getMovieVideos = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/"+movie_id+"/videos?language=en-US",
        API_OPTIONS
      );
      const json = await data.json();
    
      const filterdata = json.results.filter((video) => video.type === "Trailer");
      const trailer = filterdata.length ? filterdata[0] : json.results[0];
      
     
      dispatch(addVideoTrailer(trailer))
      
  
    };
    useEffect(() => {
      !trailervideo && getMovieVideos();
    }, []);
 
}

export default useMovieTrailer;