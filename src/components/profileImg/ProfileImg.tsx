"use client";

import { useState } from "react";
import Image from "next/image";
import { SkeletonImg } from "..";

const ProfileImg = () => {
  const [imageIsLoading, setImageIsLoading] = useState(true);
  const onLoad = () => {
    setImageIsLoading(false);
  };
  return (
    <div className="relative md:absolute w-[175px] h-[250px] md:h-[450px]  md:w-[280px] my-10">
      {imageIsLoading && <SkeletonImg />}
      <Image
        priority
        className="md:absolute  z-0 "
        src="/profile.jpeg"
        alt="profile"
        fill
        onLoad={onLoad}
        style={{ objectFit: "cover", display: imageIsLoading ? "none" : "" }}
        sizes="100%"
      />
    </div>
  );
};

export default ProfileImg;
