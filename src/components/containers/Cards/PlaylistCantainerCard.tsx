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
    <Section className="py-2 px-4 md:px-0">
      <FlexContainer
        direction="col"
        className="gap-6 items-center max-w-full md:max-w-[80%] mx-auto"
      >
        <PlaylistCard
          title={playlist.playlistName}
          description={playlist.description}
          thumbnail={playlist.thumbnail}
        />
      
          {playlist.videos?.map((video) => (
            <PlaylistVideoCard
              key={video.title}
              title={video.title}
              image={video.thumbnail}
              imageAltText={video.title}
              content=""
            />
          ))}
      </FlexContainer>
    </Section>

  );
};

export default CardContainerC;
