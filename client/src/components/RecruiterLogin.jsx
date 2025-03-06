import React, { useState } from "react";
import { assets } from "../assets/assets";

const RecruiterLogin = () => {
  const [state, setState] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [image, setImage] = useState(false);

  const [isTextDataSubmitted, setIsTextDataSubmitted] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (state === "Sign Up" && !isTextDataSubmitted) {
      setIsTextDataSubmitted(true);
    }
  };
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <form
        onSubmit={onSubmitHandler}
        className="relative bg-white p-10 rounded-xl text-slate-500"
      >
        <h1 className="text-center text-2xl font-medium text-neutral-700:">
          Recruiter {state}
        </h1>
        <p className="text-sm">Welcome back! Please {state} to continue</p>
        {state === "Sign Up" && isTextDataSubmitted ? (
          <></>
        ) : (
          <>
            {state !== "Login" ? (
              <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
                <img src={assets.person_icon} />
                <input
                  className="outline-none text-sm"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  placeholder="Company Name"
                  required
                />
              </div>
            ) : (
              ""
            )}
            <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
              <img src={assets.email_icon} />
              <input
                className="outline-none text-sm"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Email ID"
                required
              />
            </div>
            <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
              <img src={assets.email_icon} />
              <input
                className="outline-none text-sm"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Password"
                required
              />
            </div>
          </>
        )}

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-full w-full cursor-pointer mb-5"
        >
          {state === "Login"
            ? "Login"
            : isTextDataSubmitted
            ? "Create Account"
            : "Next"}
        </button>
        {state === "Login" ? (
          <p className="text-sm text-center">
            Don't have an account?{" "}
            <span
              className="cursor-pointer text-blue-600"
              onClick={() => setState("Sign Up")}
            >
              Sign Up
            </span>
          </p>
        ) : (
          <p className="text-sm text-center">
            Already have an account?{" "}
            <span
              className="cursor-pointer text-blue-600"
              onClick={() => setState("Login")}
            >
              Login
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default RecruiterLogin;
