import React from "react";

const Title = ({ children, size }) => {
  return <h1 className={`text-black-500 font-bold text-2xl text-start mt-4`}>{children}</h1>;
};

export default Title;
