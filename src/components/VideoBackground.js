/* eslint-disable react-hooks/exhaustive-deps */
import {useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";


const VideoBackground = ({ movie_id }) => {
  const trailervideo = useSelector(store => store.movies?.trailervideo);
  useMovieTrailer(movie_id);

  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/"+trailervideo?.key +"?autoplay=1&mute=1"}
        title="YouTube video player"
        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        
      ></iframe>
    </div>
  );
};
export default VideoBackground;
