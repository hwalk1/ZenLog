"use client";
import { SessionProvider } from "next-auth/react";

const AuthProvider = ({ children }) => {
  console.log("AuthProvider Running");
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
