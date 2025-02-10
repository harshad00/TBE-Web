import React from "react";
import {
  Section,
  FlexContainer,
  PlaylistVideoCard,
  CardSectionContainer,
  PlaylistCard,
} from "@/components";

import { CardContainerCProps } from "@/interfaces";

const CardContainerC = ({ playlist }: CardContainerCProps) => {
  return (
    <Section className="py-2">
      <FlexContainer direction="col" className="gap-6 items-center max-w-full md:max-w-[80%] mx-auto">
        <PlaylistCard
          title={playlist.playlistName}
          description={playlist.description}
          thumbnail={playlist.thumbnail}
        />
        <CardSectionContainer className="w-full h-[300px] md:h-[500px] overflow-y-auto space-y-4 px-2">
          {playlist.videos?.map((video, key) => (
            <PlaylistVideoCard
              key={video.title}
              title={video.title}
              image={video.thumbnail}
              imageAltText={video.title}
              content=""
              
            />
          ))}
        </CardSectionContainer>
      </FlexContainer>
    </Section>
  );
};

export default CardContainerC;
