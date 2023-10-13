import { FormatDate } from "../../helper/functions";
import useFetch from "../../hooks/useFetch";

const Header = () => {
  const { data, isLoading } = useFetch(
    "https://www.googleapis.com/youtube/v3/channels?part=snippet&id=UCjY3ThYjMFYmmldE5sZJeLQ"
  );

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="layout-header">
      <div className="layout-header_img">
        <img src={data?.items[0]?.snippet.thumbnails.default.url} alt="" />
      </div>
      <div className="layout-header_title">
        <div className="mb-2">
          <h3>{data?.items[0]?.snippet.title}</h3>
          <p className="color-primary">{data?.items[0]?.snippet.customUrl}</p>
        </div>
        <p>{FormatDate(data?.items[0]?.snippet.publishedAt)}</p>
      </div>
    </div>
  );
};

export default Header;
