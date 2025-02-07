import { GradientContainer, Image, Text } from "@/components";
import { PrimaryLongCardProps } from "@/interfaces";
import Link from "next/link";

const PrimaryLongCard = ({
  image,
  imageAltText,
  title,
  content,
  href, 
  borderColour = 4,
}: PrimaryLongCardProps) => {
  const border = `border-borderColor${borderColour}`;

  return (
    <div
      className={`w-full border border-gray-500/5 hover:bg-slate-200 flex flex-row items-center rounded-lg`}
    >
      {href ? (
        <Link href={href} className="flex flex-row w-full items-center">
          {/* Image always on the Left */}
          <div className="w-1/3 flex-shrink-0">
            <Image
              className=" w-full h-[120px] md:h-[100px] rounded-lg object-cover"
              src={image}
              alt={imageAltText}
            />
          </div>

          {/* Text always on the Right */}
          <div className="flex-grow ml-4 md:ml-0 text-left">
            <Text level="label" className="heading-4 md:heading-5 font-semibold line-clamp-2">
              {title}
            </Text>
            <Text level="p" className="paragraph mt-1 text-sm md:text-base line-clamp-2">
              {content}
            </Text>
          </div>
        </Link>
      ) : (
        <div className="flex flex-row items-center w-full">
          {/* Image always on the Left */}
          <div className="w-1/2 flex-shrink-0">
            <Image
              className=" w-full md:w-2/3 h-[120px] md:h-[200px] rounded-lg object-cover"
              src={image}
              alt={imageAltText}
            />
          </div>

          {/* Text always on the Right */}
          <div className="flex-grow ml-4 md:ml-0 md:w-[80%] text-start">
            <Text level="h6" className="heading-5 ms:heading-6 font-primary line-clamp-2">
              {title}
            </Text>
            <Text level="p" className="paragraph mt-1 text-sm md:text-base line-clamp-2">
              {content}
            </Text>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrimaryLongCard;
