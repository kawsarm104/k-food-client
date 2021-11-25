import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import locationimg from "../../../images/locationimage.png"
import appstoreimg from "../../../images/downloadappstore.PNG"
import playstoreimg from "../../../images/downloadgoogleplaystore.PNG"

import "./GetMoreWithApp.css"
const GetMoreWithApp = () => {
  return (
    <Container fluid className="mt-5 get-more-section">
      <Row className="mt-5">
        <Col sm={12} md={6} className="mt-5 pt-5 ps-2 pe-4 ">
          <h1 className="my-3 fs-1 fw-bold pe-4">
            Get More With{" "}
            <span className="text-warning">
              Our <br /> Application
            </span>
          </h1>
          <p className="mb-3">
            Nunc pellentesque orci sed tempor pharetra. Morbi molestie purus in
            interdum facilisis. Mauris commodo mi a egestas sollicitudin. Mauris
            pharetra placerat sem vel fringilla.
          </p>
          <div className="my-3 py-3 ms-5 mb-4">
            {" "}
            <h6 className="fw-bolder mt-4">Follow Delivery Status</h6>
            <h6 className="fw-bolder mt-4">Order From Any Location</h6>
            <h6 className="fw-bolder mt-4">Get Important Notices</h6>
                  </div>
                  <Row className="d-flex justify-content-center ms-3 g-1 mt-5">
                      <Col sm={12} md={6}><img src={appstoreimg} className="img-fluid" alt="" /></Col>
                      <Col sm={12} md={6}><img src={playstoreimg} className="img-fluid" alt="" /></Col>
                  </Row>
        </Col>
        <Col sm={12} md={6} className="mt-5 pt-4">
          <img src={locationimg} className="img-fluid" alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default GetMoreWithApp;
