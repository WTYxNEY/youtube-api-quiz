import React from "react";
import { Image } from "react-bootstrap";

function CardDetail({ image, title, detail }) {
  return (
    <div className="card-detail-layout">
      <div className="card-detail-img">
        <Image src={image} width={60} height={60} />
      </div>
      <div className="card-detail-text">
        <h6>{title}</h6>
        <p>{detail}</p>
      </div>
    </div>
  );
}

export default CardDetail;
