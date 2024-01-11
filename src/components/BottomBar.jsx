import React from "react";
import { FiHome } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";

const pagesList = [
  {
    icon: FiHome,
    page: "/",
    name: "inicio",
    label: "Inicio",
    show: "not-admin",
  },
  {
    icon: AiOutlineHeart,
    page: "/favorites",
    name: "favoritos",
    show: "not-admin",
    label: "Favoritos",
  },
  {
    icon: AiOutlineComment,
    page: "/comments",
    name: "comments",
    show: "not-admin",
    label: "Comentarios",
  },
];

const BottomBar = () => {

  return (
    <div className="flex flex-row justify-between ">
      {pagesList.map(({ icon: IconComponent, page, name, label }) => (
        <a
          className="flex flex-col items-center justify-center w-full h-20 text-gray-500 hover:text-[#09BC8A] cursor-pointer"
          selected={page}
          key={name}
        >
          <IconComponent className="text-2xl" />
          <span className="text-lg">{label}</span>
        </a>
      ))}
    </div>
  );
};

export default BottomBar;
