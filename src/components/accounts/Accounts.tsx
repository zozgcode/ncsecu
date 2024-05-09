"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { RiLogoutCircleRLine } from "react-icons/ri";
import TashaCain from "./allUsersTxtData/TashaCain";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();
  const [hide, setHide] = useState(false);

  const toggle = () => {
    setHide(!hide);
  };

  useEffect(() => {
    // Retrieve logged-in user data from localStorage
    const loggedInUserData = localStorage.getItem("loggedInUser");
    if (loggedInUserData) {
      setUser(JSON.parse(loggedInUserData));
    }
  }, []);

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem("loggedInUser");
    // Redirect to the login page
    router.push("/");
  };

  return (
    <div className="relative">
      {!user && (
        <div className="h-screen flex flex-col top-0 bg-white left-0 right-0 items-center fixed z-50 justify-center w-full text-2xl">
          <div className="loader"></div>
        </div>
      )}
      {user && (
        <div className="w-full">
          <div className="p-5 bg-[#2F5E80]">
            <div className="flex justify-between">
              <div className="flex justify-between w-full">
                <p className="flex flex-col gap-1 text-white">
                  <div className="flex items-center gap-3">
                    <span className="text-[16px]">Welcome,</span>
                  </div>
                  <span className="text-xl sm:text-2xl font-semibold">
                    {user.name}
                  </span>
                </p>
                <RiLogoutCircleRLine
                  className="text-[25px] text-white"
                  onClick={handleLogout}
                />
              </div>
            </div>
          </div>
          <div className="border p-5 px-2">
            {/* checking acct */}
            <div className="w-full bg-white rounded-lg h-full p-5">
              <div className="flex justify-between">
                <span className="block text-[#474747] sm:text-[24px] text-[20px] font-semibold mb-1">
                  TOTAL BALANCE
                </span>
                <span className="hidden text-[#6b6b6b] font-semibold sm:text-[24px] text-[19px] mb-1">
                  {user.checkingAccountNo}
                </span>
              </div>
              <p className="flex justify-between mt-4 sm:text-[26px] text-[20px] items-center font-bold text-gray-800">
                <span className="font-normal sm:text-[24px] text-[19px]">
                  Available Balance
                </span>
                <span>${user.checkingAmount}</span>
              </p>
            </div>

            {/* saving acct */}
            {user?.savingAccount && (
              <div className="w-full mt-4 bg-white rounded-lg h-full p-5">
                <div className="flex justify-between">
                  <span className="block text-black font-semibold mb-1">
                    Saving Account
                  </span>
                  <span className="block text-black font-semibold mb-1">
                    ...7335
                  </span>
                </div>
                <p className="flex justify-between items-center font-bold text-gray-800">
                  <span className="font-semibold">Balance</span>
                  <span>$80,000.65</span>
                </p>
              </div>
            )}
          </div>
          {/* <TransactionHistory /> */}
          <div className="p-5 px-2">
            <div className="bg-white flex items-center justify-between rounded p-3 py-2 sm:text-[24px] text-[19px] w-full">
              <span>Transactions</span>
              {/* <Link className="text-sky-500 underline" href="/accounts/transactions">
          See all
        </Link> */}
            </div>
            <div className="mt-4 flex flex-col gap-2">
              {user.id === 1 && <TashaCain />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
