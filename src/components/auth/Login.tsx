"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import usersData from "./users.json";
import Header from "../header/Header";
import Image from "next/image";

export default function Login() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const user = usersData.users.find(
      (user: any) => user.username === username
    );
    if (!user) {
      setError("Incorrect User ID or Password");
      setLoading(false);
      return;
    }
    if (user.password !== password) {
      setError("Invalid password");
      setLoading(false);
      return;
    }
    // Store user data in localStorage
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    setError("");
    setLoading(false);
    router.push("/accounts");
  };

  return (
    <div className="">
      <Header />
      <div className="h-screen bg-white">
        <div className="">
          <div className="bg-gray-100 px-4 h-16 text-[#3872a5] gap-5 mb-2">
            <p className="mx-auto flex items-center justify-between font-semibold max-w-[400px] h-full">
              <span>New to USAA?</span>
              <span>View</span>
            </p>
          </div>
          {error && (
            <p className="text-[16px] my-4 text-center w-full flex items-center justify-center text-[#d71e28]">
              {error}
            </p>
          )}
          <div className="bg-white mx-auto rounded-xl max-w-[400px] px-4 p-7">
            <form onSubmit={handleLogin}>
              {step === 1 && (
                <>
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-3">
                      <label
                        htmlFor="User ID"
                        className="text-[#5c5c5c] relative top-[45px] left-[15px] text-[16px]"
                      >
                        Online ID
                      </label>
                      <input
                        type="text"
                        value={username}
                        className="p-5 rounded-[10px] text-[#5c5c5c] bg-transparent pt-10 border border-gray-300 outline-none"
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mt-6">
                    <button
                      type="button"
                      onClick={handleNext}
                      className="p-4 py-3 bg-[#49652A] font-bold w-full rounded-[10px] text-white"
                    >
                      Next
                    </button>
                  </div>
                </>
              )}
              {step === 2 && (
                <>
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-3">
                      <label
                        htmlFor="password"
                        className="text-[#5c5c5c] text-[16px]"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        value={password}
                        className="p-5 rounded-[10px] text-[#5c5c5c] bg-transparent pb-5 border border-gray-300 outline-none"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-2 mt-6">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="p-4 py-3 bg-[#4D841B] font-bold w-full rounded-[10px] text-white"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="p-4 py-3 bg-[#4D841B] font-bold w-full rounded-[10px] text-white"
                    >
                      Sign in
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
