import React, { useState } from "react";
import { Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";

function YoutubeHeader({ onTermSubmit, setSelectedVideo }) {
  const [term, setTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    onTermSubmit(term);
    setSelectedVideo(null)
  };
  return (
    <div className="app-heading">
      <Row>
        <div className="youtube-heading-column">
        <Col md={9}>
          <div className="search-bar">
            <div className="search-icon">
              <BiSearchAlt />
            </div>

            <div className="search-input">
              <form onSubmit={onSubmit}>
                <input
                  type="text"
                  name="search"
                  id="search"
                  value={term}
                  onChange={(event) => setTerm(event.target.value)}
                />
              </form>
            </div>

            <div className="closed-icon" onClick={() => console.log("click!!")}>
              <AiOutlineCloseCircle />
            </div>
          </div>
        </Col>

        <Col md={3} sm={12}>

          <div className="heading-detail-flex">
            <div className="text-heading-youtube">
              <p style={{ fontSize: "17px" }}>Morning, Watunyu</p>
            </div>

            <Link to="/profile">
              <div>
                <Image
                  src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                  roundedCircle
                  width={40}
                  height={40}
                />
              </div>
            </Link>
          </div>
        </Col>
        </div>
      </Row>
    </div>
  );
}

export default YoutubeHeader;
