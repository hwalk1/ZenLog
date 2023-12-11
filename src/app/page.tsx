"use client";

import { useRouter } from "next/navigation";

export default function Page({}) {
  const router = useRouter();
  return (
    <>
      <div className="flex items-center justify-center flex-col min-h-screen min-w-height bg-main-bg">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Hello, Zenlog
        </h1>
        <div className="flex item-center justify-center">
          <button
            className="bg-secondary text-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded min-w-full mr-2"
            onClick={() => router.push("/journal")}
          >
            Login
          </button>
          <button className="bg-primary hover:bg-blue-500 text-secondary font-semibold hover:text-white py-2 px-4 border-blue-500 hover:border-transparent rounded min-w-full">
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
}
