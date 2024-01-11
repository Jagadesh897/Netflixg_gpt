import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [IsSignInForm,SetSignInForm]=useState(true)
  const togglesigninform =()=>{
    SetSignInForm(!IsSignInForm)
  }
  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{IsSignInForm? "Sign In": "Sign Up"}</h1>
        {!IsSignInForm && <input
          type="text"
          placeholder="Full Name"
          className="p-2 my-4 w-full bg-gray-700"
        />}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="password"
          className="p-2 my-4 w-full bg-gray-700"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {IsSignInForm? "Sign in":"Sign Up"}
        </button>
        <p className="py-6 cursor-pointer" onClick={togglesigninform}>
          {IsSignInForm? "New to Netflix? Sign Up" : "Already Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
