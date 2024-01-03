import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button className="bg-[#09BC8A] p-4 rounded-full text-[#fff] font-normal w-1/2 text-lg" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
