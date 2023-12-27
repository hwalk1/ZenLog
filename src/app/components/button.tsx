import Link from "next/link";
import React from "react";

const Button = ({ link = "" }) => {
  return (
    <Link href={link}>
      <button type="submit">This is the button compornent</button>
    </Link>
  );
};

export default Button;
