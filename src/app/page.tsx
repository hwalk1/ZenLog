"use client";

import { useRouter } from "next/navigation";

export default function Page({}) {
  const router = useRouter();
  return (
    <>
      <div className="flex items-center justify-center flex-col min-h-screen bg-main-bg">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Hello, Zenlog
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => router.push("/journal")}
          >
            {" "}
            Login
          </button>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
}
