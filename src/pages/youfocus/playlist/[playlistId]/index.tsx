import React from "react";
import { useRouter } from "next/router";
import { PlaylistPageProps } from "@/interfaces";
import { SEO, PlaylistCantainerCard } from "@/components";
import { getPlaylistPageProps } from "@/utils";

const PlaylistPage = ({ playlist, seoMeta }: PlaylistPageProps) => {
  if (!playlist) return <p>No playlist found</p>;

  return (
    <>
      <SEO seoMeta={seoMeta} />
      <div>
        <PlaylistCantainerCard playlist={playlist} />
      </div>
    </>
  );
};

export const getServerSideProps = getPlaylistPageProps;
export default PlaylistPage;
