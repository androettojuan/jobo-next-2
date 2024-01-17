import React from "react";

const Button = ({ children, size = "1/2", grey = false, onClick }) => {
  return (
    <button className={`bg-${grey ? "stone-200" : "emerald-600"} p-${grey ? "2" : "3"} rounded-full text-${grey ? "black" : "white"} font-normal w-${size} text-lg`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
