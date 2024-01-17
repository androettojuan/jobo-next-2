import React from "react";
import ModalAlert from "./ModalAlert";

const InputSwitch = ({ active, onClick, disabled, show, label, textAlert }) => {
  return (
    <>
      <div className="flex flex-row justify-between items-center cursor-pointer mt-4 mb-6" onClick={onClick}>
        <span className="text-xl font-bold">{label}</span>
        <div className="flex bg-slate-200 p-1 rounded-full w-16 shadow-lg">
          <div className={`flex w-6 h-6 rounded-full duration-300 ${active ? "bg-emerald-600 translate-x-full" : "bg-[grey]"}`} />
        </div>
      </div>
      {show === true && (
        <ModalAlert
          text={textAlert}
          active={`${active}`}
          onClose={onClick}
          disabled={disabled}
        />
      )}
    </>
  );
};

export default InputSwitch;
