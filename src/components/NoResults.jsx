import React from "react";
import SadIcon from "../../public/sad";

const NoResults = ({ msg }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-16">
      <SadIcon />
      <p className="mt-4">{msg}</p>
    </div>
  );
};

export default NoResults;
