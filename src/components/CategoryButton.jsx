import Image from "next/image";
import Link from "next/link";
import React from "react";

const icons = [
  {
    id: 1,
    icon: "/icons/plomero.png",
    name: "Plomero",
  },
  {
    id: 2,
    icon: "/icons/fuego.png",
    name: "Gasista",
  },
  {
    id: 3,
    icon: "/icons/cerrajero.png",
    name: "Cerrajero",
  },
  {
    id: 4,
    icon: "/icons/electricista.png",
    name: "Electricista",
  },
  {
    id: 5,
    icon: "/icons/pintor.png",
    name: "Pintor",
  },
  {
    id: 6,
    icon: "/icons/jardinero.png",
    name: "Jardinero",
  },
  {
    id: 7,
    icon: "/icons/enladrillado.png",
    name: "Albañil",
  },
  {
    id: 8,
    icon: "/icons/carpintero.png",
    name: "Carpintero",
  },
  {
    id: 9,
    icon: "/icons/mecanico.png",
    name: "Mecánico",
  },
  {
    id: 10,
    icon: "/icons/limpieza.png",
    name: "Limpieza",
  },
  {
    id: 11,
    icon: "/icons/cuidado-de-ninos.png",
    name: "Cuidado de niños",
  },
  {
    id: 12,
    icon: "/icons/adulto.png",
    name: "Cuidado de adultos",
  },
  {
    id: 13,
    icon: "/icons/ordenador-personal.png",
    name: "Reparación de PC",
  },
  {
    id: 14,
    icon: "/icons/diseno-grafico.png",
    name: "Diseñador gráfico",
  },
  {
    id: 15,
    icon: "/icons/traducir.png",
    name: "Traductor",
  },
  {
    id: 16,
    icon: "/icons/extractor-de-aire.png",
    name: "Refrigeración",
  },
];

const CategoryButton = ({ href, profession }) => {
  return (
    <Link className={`bg-[#508991] flex flex-col w-full p-3 rounded-xl items-center`} href={href}>
      <span className="text-[#fff] font-normal text-md mb-1">{profession}</span>
      <Image width={42} height={42} src={
        icons.find((icon) => icon.name === profession)?.icon
      } alt="icon" />
    </Link>
  );
};

export default CategoryButton;
