import {Image, Text } from "@/components";
import { PrimaryLongCardProps } from "@/interfaces";
import Link from "next/link";

const PrimaryLongCard = ({
  image,
  imageAltText,
  title,
  content,
  href, 
}: PrimaryLongCardProps) => {
  return (
    <div className="w-full border border-gray-500/5 hover:bg-slate-200 rounded-lg">
      {href ? (
        <Link href={href} className="flex flex-row w-full items-center">
          {/* Image Section */}
          <div className="w-1/3 flex-shrink-0">
            <div className="relative w-full aspect-video">
              <Image
                className="absolute inset-0 w-full h-full object-cover"
                src={image}
                alt={imageAltText}
              />
            </div>
          </div>
          {/* Text Section */}
          <div className="flex-grow p-4 text-left">
            <Text
              level="label"
              className="heading-4 font-semibold text-lg md:text-xl lg:text-2xl line-clamp-2"
            >
              {title}
            </Text>
            <Text
              level="p"
              className="paragraph mt-1 text-sm md:text-base lg:text-lg line-clamp-2"
            >
              {content}
            </Text>
          </div>
        </Link>
      ) : (
        <div className="flex flex-row items-center w-full">
          {/* Image Section */}
          <div className="w-1/2 flex-shrink-0">
            <div className="relative w-full aspect-video">
              <Image
                className="absolute inset-0 w-full h-full object-cover"
                src={image}
                alt={imageAltText}
              />
            </div>
          </div>
          {/* Text Section */}
          <div className="flex-grow p-2 text-left">
            <Text
              level="h6"
              className="heading-5 font-primary text-lg md:text-xl lg:text-2xl line-clamp-2"
            >
              {title}
            </Text>
            <Text
              level="p"
              className="paragraph mt-1 text-sm md:text-base lg:text-lg line-clamp-2"
            >
              {content}
            </Text>
          </div>
        </div>
      )}
    </div>
  )
};

export default PrimaryLongCard;
