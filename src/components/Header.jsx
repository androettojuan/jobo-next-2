import React from "react";

const Header = ({
  title,
  actions,
}) => (
  <div className="flex pt-2 items-center justify-between relative">
    <h1 className="font-normal font-hairline text-2xl leading-8 flex-grow-0 select-none">{title}</h1>
    <div className="grid grid-cols-auto-fill grid-cols-1fr gap-x-12">
      {actions
        ?.filter((e) => e.visible)
        .map((action) => (
          <div className="flex justify-center items-center flex-col cursor-pointer" key={action.name} onClick={action.onClick}>
            <button className="w-9 h-9 text-2xl border-0 p-0 text-dark flex justify-center items-center bg-transparent cursor-pointer">
              <action.icon />
            </button>
            {action.text && <span className="text-sm">{action.text}</span>}
          </div>
        ))}
    </div>
  </div>
);

export default Header;
