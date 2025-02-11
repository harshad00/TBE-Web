import React from "react";
import { Image, Text } from "@/components";

import { PlaylistCardProps } from "@/interfaces";
import Section from "@/components/layout/Section";


const PlaylistCard = ({ title, description, thumbnail }: PlaylistCardProps) => {
  return (
     <div>      <div className="flex flex-col items-center gap-4 w-full">
        <div className="w-full md:max-w-3xl p-2 transition-transform duration-300 hover:scale-105">
          <Image
            className="w-full h-auto md:h-[20rem] rounded-lg object-cover shadow-lg"
            src={thumbnail}
            alt={title}
          />
        </div>
      </div>

      <div className="w-full max-w-3xl mx-auto pr-4 pl-2 ">
        <Text level="label" className="heading-4 font-bold text-lg md:text-xl lg:text-2xl">
          {title}
        </Text>
        <Text level="p" className="paragraph mt-1 text-sm md:text-base lg:text-lg line-clamp-2">
          {description}
        </Text>
      </div>
      </div>

  );
};

export default PlaylistCard;
