import React from "react";

const AccountName = ({ name, admin = true, Profession }) => {
  return (
    <div className="flex flex-col mb-10">
      {admin ? (
        <>
          <span className="text-2xl font-bold my-2 items-center">{name}</span>
          <span className="items-center font-bold text-xl">({Profession})</span>
        </>
      ) : (
        <h1 className="text-2xl font-bold mt-6 mb-7">{name}</h1>
      )}
    </div>
  );
};

export default AccountName;
