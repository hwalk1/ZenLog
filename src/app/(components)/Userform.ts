"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const UserForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<object>({});
  const [errorMessage, setErrorMessage] = useState<string>("");
};

export default UserForm;
