/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userslice";
import { logo_url, user_logo} from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

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
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src= {logo_url}
        alt="logo"
      />
      {user && (
        <div className="flex p-2">
          <img
            className="size-12 w-12 h-12 "
            src={user_logo} 
            alt="userIcon"
          />
          <button className="font-bold text-white" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
