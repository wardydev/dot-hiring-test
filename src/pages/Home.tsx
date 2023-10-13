import { Link } from "react-router-dom";
import { Layout } from "../components";
import PlaylistItem from "../components/PlaylistItem";
import useFetch from "../hooks/useFetch";
import { PlaylistResponseItem } from "../helper/interface";

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
