"use client";

import React from "react";

type ButtonProps = {
  onClick: () => void;
  label: string;
};

const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <button
      className="text-white bg-primary py-2 px-8 rounded shadow-cos shadow-black font-bold w-fit m-2 transition-all duration-300 ease-in-out hover:bg-teal-950 hover:shadow-zinc-900"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
