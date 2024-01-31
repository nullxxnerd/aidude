"use client";
import { useState } from "react";
import Link from "next/link";

function Register() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async () => {
    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        username: userName,
      }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
  };

  return (
    <div className="grid lg:grid-cols-2 pt-6 px-8 gap-2 ">
      <div className="flex justify-center items-center ">
        <div className="bg-white z-10 shadowLogin w-full  px-8 pt-12 pb-6">
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-semibold">Sign In</h1>
              <p className="text-sm  opacity-60 font-semibold mt-3">
                Already have an account ?
                <Link href="/login" className="mx-1 text-blue-600">
                  Login
                </Link>
              </p>
            </div>
            <div className="form-field">
              <label className="form-label text-black font-bold">
                <div className="flex gap-1 items-center font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-blue-800"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                  Email addresss
                </div>
              </label>

              <input
                placeholder=""
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className="input border-gray-200 focus:border-blue-600 py-4 rounded-md max-w-full  bg-white text-black"
              />
              <label className="form-label">
                <span className="form-label-alt text-gray-700">
                  {/* Please enter a valid email. */}
                </span>
              </label>
            </div>
            <div className="form-field">
              <label className="form-label text-black font-bold">
                <div className="flex gap-1 items-center font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-blue-800"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                  Username
                </div>
              </label>

              <input
                placeholder=""
                type="text"
                onChange={(e) => setUserName(e.target.value)}
                className="input border-gray-200 focus:border-blue-600 py-4 rounded-md max-w-full  bg-white text-black"
              />
              <label className="form-label">
                <span className="form-label-alt"></span>
              </label>
            </div>
            <div className="form-field">
              <label className="form-label text-black font-bold">
                <div className="flex gap-1 items-center font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-blue-800"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                    />
                  </svg>{" "}
                  Password
                </div>
              </label>

              <input
                placeholder=""
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="input border-gray-200 focus:border-blue-600 py-4 rounded-md max-w-full  bg-white text-black"
              />
              <label className="form-label">
                <span className="form-label-alt"></span>
              </label>
            </div>

            <button
              type="submit"
              className="btn mt-2 text-white text-base w-full rounded-md bg-blue-700 font-bold text-center p-3"
              style={{ height: "45px" }}
            >
              Sign Up
            </button>
          </form>
          <div className="divider my-4 mt-6 text-xs text-gray-700">
            or continue with
          </div>
          <div className="flex w-full flex-col gap-2">
            <div className="flex w-full flex-col gap-1">
              <button
                type="button"
                className="btn bg-gray-300 rounded-md gap-2 text-black"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  version="1.1"
                  viewBox="0 0 48 48"
                  enableBackground="new 0 0 48 48"
                  className="h-5 w-5 text-blue-800"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657        C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36        c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
              c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                </svg>
                <span>Sign up with google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bluePic hidden  lg:flex justify-center items-center "></div>
    </div>
  );
}

export default Register;
