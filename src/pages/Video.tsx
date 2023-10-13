import { useParams, useNavigate } from "react-router-dom";
import { Layout } from "../components";
import useFetch from "../hooks/useFetch";
import Playlists from "./Playlists";

const Video = () => {
  const { videoId } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useFetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}`
  );

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <Layout isHeader={false} isPadding={false}>
      <div className="video-header">
        <svg
          onClick={() => navigate(-1)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          width={30}
          style={{ color: "#2CAB00", cursor: "pointer" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
        <span>Kembali</span>
      </div>
      <div className="video">
        <div style={{ width: "100%" }}>
          <iframe
            title="YouTube Video"
            width="100%"
            height={200}
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video-title padding-layout">
          <div className="video-title_heading">
            <h3>{data?.items[0].snippet.title}</h3>
            <p className="text-ellipsis mb-2">
              {data?.items[0].snippet.description}
            </p>
          </div>
          <p>20 agustus 2018</p>
          <div className="video-title_channel">
            <div></div>
            <h4>{data?.items[0].snippet.channelTitle}</h4>
          </div>
        </div>
      </div>
      <Playlists />
    </Layout>
  );
};

export default Video;
