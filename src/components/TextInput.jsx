import React from "react";
import { VscCopy } from "react-icons/vsc";


const TextInput = ({
  name,
  search,
  loading,
  value,
  onChange,
  placeholder,
  label,
  disabled,
  copy,
  type = "text",
}) => {
  return (
    <div className="relative flex items-center justify-center">
      <label className="flex flex-col items-start font-bold text-lg pb-6 w-full relative">
        {label}
        <input
        className="p-4 rounded-full text-black-600 font-normal w-full shadow-md bg-stone-200"
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
        />
        {copy && (
          <VscCopy
            onClick={() => {
              navigator.clipboard.writeText(value);
            }}
          />
        )}
      </label>
    </div>
  );
};

export default TextInput;
