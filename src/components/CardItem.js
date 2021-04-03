import React from "react";
import CardDetail from "./CardDetail";
import { Row, Col } from "react-bootstrap";

function CardItem() {
  const tempData = [
    {
      image: "https://www.iconpacks.net/icons/1/free-winner-icon-488-thumb.png",
      title: "First Step",
      detail: "Pass your first quiz",
    },
    {
      image: "https://image.flaticon.com/icons/png/128/3885/3885250.png",
      title: "Certificate Unlocked",
      detail: "Confirm your name on your certificates",
    },
    {
      image:
        "https://i.pinimg.com/originals/2c/fc/93/2cfc93d7665f5d7728782700e50596e3.png",
      title: "Bookworm",
      detail: "Complete all of the practice course lessons",
    },
    {
      image:
        "https://images.vexels.com/media/users/3/153396/isolated/preview/3a868c6872c803c567bd867d226be1af-video-player-interface-flat-icon-by-vexels.png",
      title: "Training Wheels",
      detail: "Complete the portal tutorial",
    },
    {
      image: "https://image.flaticon.com/icons/png/512/326/326909.png",
      title: "Final Exam",
      detail: "Pass the practice course final exam",
    },
  ];

  return (
    <Row>
      {tempData.map((item) => {
        return (
          <Col md={6}>
            <CardDetail
              image={item.image}
              title={item.title}
              detail={item.detail}
            />
          </Col>
        );
      })}
    </Row>
  );
}

export default CardItem;
