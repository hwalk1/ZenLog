"use client";

import { useRouter } from "next/navigation";

export default function Page({}) {
  const router = useRouter();
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <h1>Hello, Zenlog</h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <button
            style={{ marginRight: "50px" }}
            onClick={() => router.push("/journal")}
          >
            {" "}
            Login
          </button>
          <button>Sign Up</button>
        </div>
      </div>
    </>
  );
}
