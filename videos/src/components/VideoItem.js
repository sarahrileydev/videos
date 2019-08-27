import React from "react";

import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img className="ui image" src={video.snippet.thumbnails.medium.url} />
      {video.snippet.title}
    </div>
  );
};

export default VideoItem;
