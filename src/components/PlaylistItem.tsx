import React from "react";
import { getYear } from "../helper/functions";

export interface PlaylistItem {
  id: string;
  title: string;
  publishedAt: string;
  channelTitle: string;
  thumbnail: string;
}

const PlaylistItem: React.FC<PlaylistItem> = ({
  title,
  publishedAt,
  channelTitle,
  thumbnail,
}) => {
  return (
    <div className="mb-2">
      <div className="playlist">
        <img src={thumbnail} alt="playlist-thumbnail" />
        <div className="playlist-title">
          <h3>{title}</h3>
          <p>{channelTitle}</p>
        </div>
        <div className="playlist-title_year">{getYear(publishedAt)}</div>
      </div>
    </div>
  );
};

export default PlaylistItem;
