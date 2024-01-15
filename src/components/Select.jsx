import React from "react";

const Select = ({ name, value, onChange, options }) => {
  return (
    <select className="rounded-xl text-gray-600 border-none p-4 w-full shadow-sm cursor-pointer mb-5" name={name} value={value} onChange={onChange}>
      {options.map((option, index) => (
        <option key={index} value={option.id}>
          {option.title}
        </option>
      ))}
    </select>
  );
};

export default Select;
