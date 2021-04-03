import React from "react";
import VideoItem from "./VideoItem";
import { Row, Col } from "react-bootstrap";

function VideoList({ videos, onVideoSelect }) {
  return (
    <Row className="videos-list-layout">
      {videos.map((video) => {
        return (
            <Col>
              <VideoItem
                key={video.id.videoId}
                video={video}
                onVideoSelect={onVideoSelect}
              />
            </Col>
          
        );
      })}
    </Row>
  );
}

export default VideoList;
