"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import usersData from "./users.json";
import Header from "../header/Header";
import Image from "next/image";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const user = usersData.users.find(
      (user: any) => user.username === username
    );
    if (!user) {
      setError("User not found");
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
    router.push("/accounts");
    setLoading(false);
  };

  return (
    <div className="">
      <Header />
      <div className="h-screen bg-white">
        <div className="pt-10">
          <div className="flex items-center flex-col gap-5 justify-center mb-2">
            <p className="text-[20px] text-[#3a660b] font-semibold">Sign Into Member Access</p>
          </div>
          {error && (
            <p className="text-[20px] my-4 text-center mx-auto max-w-[200px] rounded-md min-h-[50px] flex items-center justify-center bg-[#2d1a47] text-white">
              {error}
            </p>
          )}
          <div className="bg-white mx-auto rounded-xl max-w-[400px] p-7">
            <form onSubmit={handleLogin}>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <label
                    htmlFor="User ID"
                    className="text-[#5c5c5c] text-[16px]"
                  >
                    User ID
                  </label>
                  <input
                    type="text"
                    value={username}
                    className="p-5 rounded-[10px] text-[#5c5c5c] bg-transparent pb-5 border border-gray-300 outline-none"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
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

              <div className="flex flex-col gap-2 mt-6">
                <button
                  type="submit"
                  className="p-4 bg-[#4D841B] font-bold w-full rounded-[10px] text-white"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width="2.8"
                          height="12"
                          x="1"
                          y="6"
                          fill="currentColor"
                        >
                          <animate
                            id="IconifyId18f313d6c669096ff111"
                            attributeName="y"
                            begin="0;IconifyId18f313d6c669096ff112.end-0.1s"
                            calcMode="spline"
                            dur="0.6s"
                            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                            values="6;1;6"
                          />
                          <animate
                            attributeName="height"
                            begin="0;IconifyId18f313d6c669096ff112.end-0.1s"
                            calcMode="spline"
                            dur="0.6s"
                            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                            values="12;22;12"
                          />
                        </rect>
                        <rect
                          width="2.8"
                          height="12"
                          x="5.8"
                          y="6"
                          fill="currentColor"
                        >
                          <animate
                            attributeName="y"
                            begin="IconifyId18f313d6c669096ff111.begin+0.1s"
                            calcMode="spline"
                            dur="0.6s"
                            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                            values="6;1;6"
                          />
                          <animate
                            attributeName="height"
                            begin="IconifyId18f313d6c669096ff111.begin+0.1s"
                            calcMode="spline"
                            dur="0.6s"
                            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                            values="12;22;12"
                          />
                        </rect>
                        <rect
                          width="2.8"
                          height="12"
                          x="10.6"
                          y="6"
                          fill="currentColor"
                        >
                          <animate
                            attributeName="y"
                            begin="IconifyId18f313d6c669096ff111.begin+0.2s"
                            calcMode="spline"
                            dur="0.6s"
                            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                            values="6;1;6"
                          />
                          <animate
                            attributeName="height"
                            begin="IconifyId18f313d6c669096ff111.begin+0.2s"
                            calcMode="spline"
                            dur="0.6s"
                            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                            values="12;22;12"
                          />
                        </rect>
                        <rect
                          width="2.8"
                          height="12"
                          x="15.4"
                          y="6"
                          fill="currentColor"
                        >
                          <animate
                            attributeName="y"
                            begin="IconifyId18f313d6c669096ff111.begin+0.3s"
                            calcMode="spline"
                            dur="0.6s"
                            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                            values="6;1;6"
                          />
                          <animate
                            attributeName="height"
                            begin="IconifyId18f313d6c669096ff111.begin+0.3s"
                            calcMode="spline"
                            dur="0.6s"
                            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                            values="12;22;12"
                          />
                        </rect>
                        <rect
                          width="2.8"
                          height="12"
                          x="20.2"
                          y="6"
                          fill="currentColor"
                        >
                          <animate
                            id="IconifyId18f313d6c669096ff112"
                            attributeName="y"
                            begin="IconifyId18f313d6c669096ff111.begin+0.4s"
                            calcMode="spline"
                            dur="0.6s"
                            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                            values="6;1;6"
                          />
                          <animate
                            attributeName="height"
                            begin="IconifyId18f313d6c669096ff111.begin+0.4s"
                            calcMode="spline"
                            dur="0.6s"
                            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                            values="12;22;12"
                          />
                        </rect>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width="2.8"
                          height="12"
                          x="1"
                          y="6"
                          fill="currentColor"
                        >
                          <animate
                            id="IconifyId18f313d6c669096ff111"
                            attributeName="y"
                            begin="0;IconifyId18f313d6c669096ff112.end-0.1s"
                            calcMode="spline"
                            dur="0.6s"
                            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                            values="6;1;6"
                          />
                          <animate
                            attributeName="height"
                            begin="0;IconifyId18f313d6c669096ff112.end-0.1s"
                            calcMode="spline"
                            dur="0.6s"
                            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                            values="12;22;12"
                          />
                        </rect>
                        <rect
                          width="2.8"
                          height="12"
                          x="5.8"
                          y="6"
                          fill="currentColor"
                        >
                          <animate
                            attributeName="y"
                            begin="IconifyId18f313d6c669096ff111.begin+0.1s"
                            calcMode="spline"
                            dur="0.6s"
                            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                            values="6;1;6"
                          />
                          <animate
                            attributeName="height"
                            begin="IconifyId18f313d6c669096ff111.begin+0.1s"
                            calcMode="spline"
                            dur="0.6s"
                            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                            values="12;22;12"
                          />
                        </rect>
                        <rect
                          width="2.8"
                          height="12"
                          x="10.6"
                          y="6"
                          fill="currentColor"
                        >
                          <animate
                            attributeName="y"
                            begin="IconifyId18f313d6c669096ff111.begin+0.2s"
                            calcMode="spline"
                            dur="0.6s"
                            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                            values="6;1;6"
                          />
                          <animate
                            attributeName="height"
                            begin="IconifyId18f313d6c669096ff111.begin+0.2s"
                            calcMode="spline"
                            dur="0.6s"
                            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                            values="12;22;12"
                          />
                        </rect>
                        <rect
                          width="2.8"
                          height="12"
                          x="15.4"
                          y="6"
                          fill="currentColor"
                        >
                          <animate
                            attributeName="y"
                            begin="IconifyId18f313d6c669096ff111.begin+0.3s"
                            calcMode="spline"
                            dur="0.6s"
                            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                            values="6;1;6"
                          />
                          <animate
                            attributeName="height"
                            begin="IconifyId18f313d6c669096ff111.begin+0.3s"
                            calcMode="spline"
                            dur="0.6s"
                            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                            values="12;22;12"
                          />
                        </rect>
                        <rect
                          width="2.8"
                          height="12"
                          x="20.2"
                          y="6"
                          fill="currentColor"
                        >
                          <animate
                            id="IconifyId18f313d6c669096ff112"
                            attributeName="y"
                            begin="IconifyId18f313d6c669096ff111.begin+0.4s"
                            calcMode="spline"
                            dur="0.6s"
                            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                            values="6;1;6"
                          />
                          <animate
                            attributeName="height"
                            begin="IconifyId18f313d6c669096ff111.begin+0.4s"
                            calcMode="spline"
                            dur="0.6s"
                            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                            values="12;22;12"
                          />
                        </rect>
                      </svg>
                    </span>
                  ) : (
                    "Sign in"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
