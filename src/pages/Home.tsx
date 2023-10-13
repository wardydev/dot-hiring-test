import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components";
import PlaylistItem from "../components/PlaylistItem";
import useFetch from "../hooks/useFetch";

export interface PlaylistResponseItem {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
      medium: {
        url: string;
        width: number;
        height: number;
      };
      high: {
        url: string;
        width: number;
        height: number;
      };
      standard: {
        url: string;
        width: number;
        height: number;
      };
      maxres: {
        url: string;
        width: number;
        height: number;
      };
    };
    channelTitle: string;
    localized: {
      title: string;
      description: string;
    };
  };
}

const Home = () => {
  const { data, isLoading } = useFetch(
    "https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UCjY3ThYjMFYmmldE5sZJeLQ&"
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Layout isHeader>
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
    </Layout>
  );
};

export default Home;
