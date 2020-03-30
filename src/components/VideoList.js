import React from "react";

import VideoItem from "./VideoItem";

const VideoList = props => {
  return (
    <div className="ui middle aligned animated divided list">
      {props.videos.map(video => {
        return (
          <VideoItem
            video={video}
            selectedVideo={props.selectedVideo}
            key={video.id.videoId}
          />
        );
      })}
    </div>
  );
};

export default VideoList;
