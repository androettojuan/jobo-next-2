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
    <div>
      {pagesList
        .filter((page) => {
          if (page.show === "admin") {
            return false;
          }
          return true;
        })
        .map(({ icon: IconComponent, page, name, label }) => (
          <a
            selected={page}
            key={name}
            href="/"
          >
            <IconComponent />
            <span>{label}</span>
          </a>
        ))}
    </div>
  );
};

export default BottomBar;
