import React from "react";
import { useParams } from "react-router-dom";

function VideoDetail({ selectedVideo }) {
  console.log(selectedVideo);
  const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;
  return (
    <div className="video-detail-layout">
      <div className="video-item-ifram">
        <iframe title="video play" src={videoSrc} />
      </div>
      <div className="video-detail-text-layout">
        <div className="video-detail-title">
          <h6>{selectedVideo.snippet.title}</h6>
        </div>
        <div className="video-detail-description">
          <p>{selectedVideo.snippet.description}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoDetail;
