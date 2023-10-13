import { Layout, VideoItem } from "../components";
import { useParams, useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import { playlistItem } from "../helper/interface";

const DetailPlaylist = () => {
  const { playlistId } = useParams();
  const location = useLocation();
  const { data, isLoading } = useFetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}`
  );

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <Layout isHeader>
      <h2 className="detail-playlist_heading mb-3">
        Playlist <span>{location.state.title}</span>
      </h2>
      <div>
        {data?.items.map((item: playlistItem) => {
          return (
            <Link
              to={`/watch/${item.snippet.resourceId.videoId}`}
              key={item.id}
            >
              <VideoItem
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

export default DetailPlaylist;
