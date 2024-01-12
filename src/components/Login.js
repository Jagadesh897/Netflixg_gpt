/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import Header from "./Header";
import { CheckVaildDate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { addUser } from "../utils/userslice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [IsSignInForm, SetSignInForm] = useState(true);
  
  const dispatch = useDispatch();

  const [errormessage, seterrormessage] = useState(null);

  const name = useRef(null);

  const email = useRef(null);

  const password = useRef(null);

  const handlebuttonclick = () => {
    const message = CheckVaildDate(
      name?.current?.value,
      email?.current?.value,
      password?.current?.value
    );
    seterrormessage(message);
    if (message) return;
    //sign in or sign up
    if (!IsSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://avatarfiles.alphacoders.com/144/144986.jpg",
          })
            .then(() => {
              const {uid, email, displayName ,photoURL} = auth.currentUser;
          dispatch(addUser({
            uid: uid,
            email: email,
            displayName: displayName,
             photoURl: photoURL
            }));
              
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          // ...
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormessage(errorCode + "-" + errorMessage);
        });
    }
  };
  const togglesigninform = () => {
    SetSignInForm(!IsSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {IsSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!IsSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-2 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500 ">{errormessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handlebuttonclick}
        >
          {IsSignInForm ? "Sign in" : "Sign Up"}
        </button>
        <p className="py-6 cursor-pointer" onClick={togglesigninform}>
          {IsSignInForm ? "New to Netflix? Sign Up" : "Already Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
