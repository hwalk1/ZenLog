"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const UserForm: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    const res = await fetch("/api/Users", {
      method: "POST",
      body: JSON.stringify({ formData }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      const reposne = await res.json();
      setErrorMessage(reposne.message);
    } else {
      router.refresh();
      router.push("/");
    }
};

  return (
    <>
      <form
        onSubmit={handleSubmit},
        method="post",
        className="flex felx-col",
      ><h1><></form>
    </>
  );
};

export default UserForm;
