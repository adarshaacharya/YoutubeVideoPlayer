import React from "react";

import './VideoItem.css';

const VideoItem = props => {
  const video = props.video;
  return (
    <div onClick={() => props.selectedVideo(video)} className="video-item item">
      <img
        className="ui small image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />

      <div className="content">
        <div className="header" >{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
