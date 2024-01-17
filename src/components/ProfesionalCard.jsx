import Image from "next/image";
import React from "react";
import { AiFillHeart, AiFillStar, AiOutlineHeart } from "react-icons/ai";

const ProfesionalCard = ({
  name,
  profession,
  photo,
  onClick,
  favorite,
  isFavorite,
  rating
}) => {
  return (
    <div className="flex flex-row shadow-md rounded-xl h-21 cursor-pointer w-full" onClick={onClick}>
      <Image className="rounded-tl-2xl rounded-bl-2xl object-cover" width={110} height={90} src={photo} alt="foto profesional" />
      <div className="flex flex-row justify-between w-full p-2 px-4">
        <div className="flex flex-col items-start ">
          <span className="font-bold text-lg mb-1 text-start">{name}</span>
          <span className="font-normal text-lg">{profession}</span>
        </div>
        <div className="flex flex-col items-end justify-between">
          <div className="text-[red] text-2xl" onClick={isFavorite}>
            {favorite ? <AiFillHeart /> : <AiOutlineHeart />}
          </div>
          <div className="flex flex-row items-center">
            <div className="text-amber-400 text-2xl mr-1">
              <AiFillStar />
            </div>
            <span className="font-normal text-xl">{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfesionalCard;
