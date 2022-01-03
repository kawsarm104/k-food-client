import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import sitathomeimg from "../../../images/sitathome.png";
import "./SitAtHome.css";

const SitAtHome = () => {
  return (
    <Container fluid  className="sitathome">
      <Row className="">
        <Col sm={12} md={6} className="g-0">
          <img src={sitathomeimg} className="img-fluid" alt="" />
        </Col>
        <Col sm={12} md={6} className="py-4">
          <div className=" pt-4 ps-5">
            <h1 className="text-white">Sit at Home</h1>
            <h1 className="text-warning">We Will Take Care</h1>
            <p className="text-white">
              Proin ornare posuere quam ut euismod. Nam eu nunc vitae orci
              ultrices imperdiet ut id ligula. Sed interdum eros eget sagittis
              rutrum. Vestibulum in elementum mauris. In iaculis odio urna.
            </p>
            <Row className="text-center mt-1">
              <Col sm={6} md={3}>
                <p className="fw-bolder text-white">Fast Delivery in 1 Hour</p>
              </Col>
              <Col sm={6} md={3}>
                <p className="fw-bolder text-white">Amazing Mobile App</p>
              </Col>
              <Col sm={6} md={3}>
                <p className="fw-bolder text-white">Wide Coverage Map</p>
              </Col>
              <Col sm={6} md={3}>
                <p className="fw-bolder text-white">More Than 150 Couriers</p>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SitAtHome;
