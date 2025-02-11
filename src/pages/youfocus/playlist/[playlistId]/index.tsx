import React from "react";
import { PlaylistPageProps } from "@/interfaces";
import { SEO, PlaylistCantainerCard } from "@/components";
import { getPlaylistPageProps } from "@/utils";
import Section from "@/components/layout/Section";

const PlaylistPage = ({ playlist, seoMeta }: PlaylistPageProps) => {
  return (
    <>
      <SEO seoMeta={seoMeta} />
      <Section className="p-2">
        <PlaylistCantainerCard playlist={playlist} />
      </Section>

    </>
  );
};

export const getServerSideProps = getPlaylistPageProps;
export default PlaylistPage;
