import React from "react";

interface VideoItem {
  title: string;
  thumbnail: string;
}

const VideoItem: React.FC<VideoItem> = ({ title, thumbnail }) => {
  return (
    <div className="mb-3">
      <div className="video-item">
        <img src={thumbnail} alt="thumbnail" />
        <div className="video-item_title">
          <h4>{title}</h4>
        </div>
        <div className="video-item_icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            width={50}
            style={{ color: "white" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
