import React from "react";

function VideoItem({ video, onVideoSelect }) {
  return (

      <div onClick={() => onVideoSelect(video)} className="video-item-layout">
        <img
          alt={video.snippet.title}
          className="ui image"
          src={video.snippet.thumbnails.medium.url}
        />
        <div className="video-item-title">
          <h6>{video.snippet.title}</h6>
        </div>
        <div className="video-item-description">
          <p>{video.snippet.description}</p>
        </div>
      </div>

  );
}

export default VideoItem;
