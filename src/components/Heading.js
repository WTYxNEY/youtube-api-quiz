import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import "../style/youtube.css";

function Heading() {
  return (
    <div className="app-heading">
      <Row>
        <Col md={9}></Col>
        <Col md={3}>
          <div className="heading-detail-flex">
            <div className="text-heading">
              <p style={{ fontSize: "17px" }}>Morning, Watunyu</p>
            </div>
            <div className="img-heading">
              <Image
                src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                roundedCircle
                width={40}
                height={40}
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Heading;
