import React from "react";
import { Image, Text } from "@/components";

import {PlaylistCardProps}  from "@/interfaces";


const PlaylistCard = ({ title, description, thumbnail }: PlaylistCardProps) => {
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="w-full flex justify-center p-1">
        <Image
          className="w-full md:w-2/3 md:h-[20rem] rounded-lg object-cover"
          src={thumbnail}
          alt={title}
        />
      </div>
      
      <div className="w-full md:w-[80%] md:ml-28 ml-4">
        <Text level="label" className="heading-4 font-bold">
          {title}
        </Text>
        <Text level="p" className="paragraph mt-1 text-sm md:text-base line-clamp-2">
          {description}
        </Text>
      </div>
    </div>
  );
};

export default PlaylistCard;
