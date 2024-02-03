"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const UserForm: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
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
    
  )
};

export default UserForm;
