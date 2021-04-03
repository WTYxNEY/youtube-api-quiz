import React, { useState, useEffect } from "react";
import YoutubeHeader from "./YoutubeHeader";
import useVideos from "./uesVideos";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

function Youtube() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("javascript");
  
  return (
    <>
      <YoutubeHeader onTermSubmit={search} setSelectedVideo={setSelectedVideo}/>

      {!selectedVideo ? (
        <VideoList
          onVideoSelect={(video) => setSelectedVideo(video)}
          videos={videos}
        />
      ) : (
        <VideoDetail selectedVideo={selectedVideo} />
      )}
    </>
  );
}

export default Youtube;
