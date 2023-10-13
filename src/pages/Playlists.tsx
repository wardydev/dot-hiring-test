import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { PlaylistResponseItem } from "./Home";
import PlaylistItem from "../components/PlaylistItem";

const Playlists = () => {
  const { data, isLoading } = useFetch(
    "https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UCjY3ThYjMFYmmldE5sZJeLQ&"
  );

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="padding-layout">
      <h2 className="mb-3">Playlists</h2>
      <div className="home grid grid-cols-2">
        {data?.items.map((item: PlaylistResponseItem) => {
          return (
            <Link
              key={item.id}
              to={`/detail-playlist/${item.id}`}
              state={{ title: item.snippet.title }}
            >
              <PlaylistItem
                id={item.id}
                channelTitle={item.snippet.channelTitle}
                publishedAt={item.snippet.publishedAt}
                thumbnail={item.snippet.thumbnails.medium.url}
                title={item.snippet.title}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Playlists;
