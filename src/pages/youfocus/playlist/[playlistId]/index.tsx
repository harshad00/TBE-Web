import React from "react";
import { useRouter } from "next/router";
import { PageProps } from "@/interfaces";
import { SEO, CardContainerC } from "@/components";
import { routes } from "@/constant";
import { useApi } from "@/hooks";

const PlaylistPage = ({ seoMeta }: PageProps) => {
  const router = useRouter();
  const { playlistId } = router.query as { playlistId: string };

  const { response, loading, error } = useApi(
    "youfocus-get-playlist",
    {
      url: `${routes.api.youfocusPlaylistById(playlistId)}`,
    },
    { enabled: !!playlistId }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading playlist</p>;

  const playlist = response?.data;

  if (!playlist) return <p>No playlist found</p>;

  return (
    <>
      <SEO seoMeta={seoMeta ?? {
            title: playlist?.playlistName || "Playlist",
            description: "Playlist Details",
          }
        }
      />
      <div>
        <CardContainerC playlist={playlist} />
      </div>
    </>
  );
};

export default PlaylistPage;
