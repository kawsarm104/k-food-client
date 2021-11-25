import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import backgroundImg from "../../../images/Banner/kfoodbannerbackgroundimage.png";
import bottomcornerimage from "../../../images/Banner/kfoodbannerbottomcornerimage.png";
import deliveryboyimg from "../../../images/Banner/kfooddeliveryboyimage.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="">
      <div className="banner position-relative ">
        <div
          className="background-corner-img p-4"
          style={{ backgroundImage: `url(${bottomcornerimage})` }}
        >
          <div
            className="background-overlay"
            style={{ backgroundImage: `url(${backgroundImg})` }}
          >
            <Container className="pt-5">
              <Row>
                <Col className="" sm={12} lg={6}>
                  <h1 className=" text-light large-text">
                    Express
                    <br />
                    <span className="text-yellow">Home Delivery</span>
                  </h1>
                </Col>
                <Col className="" sm={12} lg={6}>
                  <img src={deliveryboyimg} className="w-100" alt="" />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
