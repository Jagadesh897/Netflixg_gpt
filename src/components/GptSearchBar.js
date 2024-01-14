import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstant";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constant";
import { addGptMovieResults } from "../utils/gptslice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const serachText = useRef(null);
  const dispatch = useDispatch();

  //seach movie in tmdb
  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchclick = async () => {
    console.log(serachText.current.value);
    //Make an APi call to GPt api and get Movie results
    const gptQuerry =
      "Act as a Movie Recommendation System and Suggest some movies for the querry " +
      serachText.current.value +
      ".only give me names of 5 movies,comma separated like the example result given ahead.Example Result : Gadar , Sholay, Don, Golmaal, Koi Mil Gaya ";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuerry }],
      model: "gpt-3.5-turbo",
    });
    if (!gptResults.choices) {
      /*TODO : Write ERROR Handling Here */
    }

    console.log(gptResults.choices[0]?.message?.content);

    const gptmovies = gptResults.choices[0]?.message?.content.split(",");
    //for each movie i will search  TMDb API

    const promiseArray = gptmovies.map((movie) => searchMovieTmdb(movie));
    // it will return a 5 promise array [promise,]
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(addGptMovieResults({movieNames: gptmovies ,movieResults :tmdbResults}))
  };

  return (
    <div className="pt-[8%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12 "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={serachText}
          type="text"
          className=" p-4 m-4 col-span-9"
          placeholder={lang[langKey]?.gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 m-4 text-white bg-red-800 rounded-lg col-span-3"
          onClick={handleGptSearchclick}
        >
          {lang[langKey]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
