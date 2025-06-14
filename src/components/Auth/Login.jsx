import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email, "\n", password);
  };

  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="flex flex-col items-center gap-3 justify-center border border-amber-500 p-11 rounded-2xl">
          <h3 className="text-3xl">Login</h3>
          <form className="flex flex-col gap-4 mt-2.5" onSubmit={submitHandler}>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
              className="border border-amber-500 outline-none text-xl rounded-full p-3 bg-transparent"
              type="email"
              name="email"
              placeholder="Enter Your Email"
            />
            <input
              input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
              className="border border-amber-500 outline-none text-xl rounded-full p-3"
              type="password"
              name="password"
              placeholder="Enter Your Password"
            />
            <button className="border border-amber-500 outline-none text-xl rounded-full p-3 cursor-pointer mt-2">
              Log In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
