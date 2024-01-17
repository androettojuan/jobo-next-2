import React from "react";
import Image from "next/image";

const UserPhoto = ({url, name}) => {
  return (
    <div>
      <Image className="w-36 h-36 rounded-full border-4 border-emerald-600 flex justify-center items-center m-0 mx-auto my-10 object-cover" width={144} height={144} src={url} alt={name}/>
    </div>
  );
};

export default UserPhoto;
