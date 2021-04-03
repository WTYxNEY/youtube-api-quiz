import React from "react";
import { Row, Col } from "react-bootstrap";

function Tabs() {
  return (
    <div className="tabs-layout">
      <Row>
        <Col md={4}>
          <div className="tabs-header">

            <div className="tabs-content-active">
            <p>BADGES</p>
            </div>
            <div className="tabs-content">
            <p>STUDYING</p>
            </div>
            <div className="tabs-content">
            <p>COLLECTION</p>
            </div>

          </div>
        </Col>
        <Col className="non-display" md={8}></Col>
      </Row>
    </div>
  );
}

export default Tabs;
