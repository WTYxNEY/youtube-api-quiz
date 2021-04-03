import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import "../style/youtube.css";
import { Link } from "react-router-dom";

function User() {
  return (
    <Row>
      <Col></Col>
      <div className="user">
        <Col>
          <div className="user-img">
            <Image
              src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
              roundedCircle
              width={80}
              height={80}
            />
          </div>
          <Link to="/">
            <p className="user-text" style={{ fontSize: "17px" }}>
              Watunyu Panmun
            </p>
          </Link>
        </Col>
      </div>
      <Col></Col>
    </Row>
  );
}

export default User;
