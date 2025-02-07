import React from "react";
import { useRouter } from "next/router";
import { PageProps } from "@/interfaces";
import { SEO, CardContainerC } from "@/components";
import { getPlaylistPageProps } from "@/utils";

const PlaylistPage = ({ seoMeta, playlist }: PageProps & { playlist: any }) => {
  const router = useRouter();

  if (!playlist) return <p>No playlist found</p>;

  return (
    <>
      <SEO seoMeta={seoMeta} />
      <div>
        <CardContainerC playlist={playlist} />
      </div>
    </>
  );
};

export const getServerSideProps = getPlaylistPageProps;
export default PlaylistPage;
