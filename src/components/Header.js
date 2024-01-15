/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userslice";
import {  SUPPORTED_LANGUAGES, logo_url, user_logo} from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptslice";
import { changeLanguage } from "../utils/configslice";


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        
      });
  };

  useEffect(()=>{
    const unSubcribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName ,photoURL} = user;
        dispatch(addUser({uid: uid,email: email,displayName: displayName, photoURL: photoURL}))
        navigate("/Browse")
        
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate("/")
        
      }
      
    });
    //unSubcribe when compoent unmounts 
    return () => unSubcribe();
  },[])

  const handleGptSearchclick = ()=>{
    //Toggle Gpt search
    dispatch(toggleGptSearchView());
  }
  const handlelanguagechange =(e)=>{
    dispatch(changeLanguage(e.target.value))

  }
  
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex  flex-col md:flex-row justify-between ">
      <img
        className="w-44 mx-auto md:mx-0"
        src= {logo_url}
        alt="logo"
      />
      
      {user && (
        <div className="flex p-2 justify-between">
       {showGptSearch && <select className="p-2 m-2 bg-gray-900 text-white" onChange={handlelanguagechange}>
        {SUPPORTED_LANGUAGES.map((lang => 
        <option key={lang.identifier} value={lang.identifier}>
          {lang.name}
          </option>))}
        
      </select>}
          <button className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
          onClick={handleGptSearchclick}>{showGptSearch? "Home page" : "GPT search" }</button>
          <img
            className=" hidden md:block size-12 w-12 h-12 "
            src={user_logo} 
            alt="userIcon"
          />
          <button className="font-bold text-white" onClick={handleSignOut}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
