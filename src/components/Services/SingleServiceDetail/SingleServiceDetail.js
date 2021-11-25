import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";

const SingleServiceDetail = () => {
      const [servicedetail, setServiceDetail] = useState({});
      const { id } = useParams();
      useEffect(() => {
        const url = `https://still-peak-01540.herokuapp.com/services/${id}`;
        fetch(url)
          .then((res) => res.json())
          .then((data) => setServiceDetail(data));
      }, []);
  return (
  <Container fluid>
      <Row>
        <Col sm={12} md={6} className="">
          <img src={servicedetail.photoUrl} className="img-fluid" alt="" />
        </Col>
        <Col
          sm={12}
          md={6}
          className=" d-flex align-items-center ps-5 pb-5 pe-5"
        >
          <div>
            <h1> {servicedetail.name}</h1>
            <p className="text-warning fw-bolder fs-4">
              ${servicedetail.price}
            </p>
            <p>{servicedetail.details}</p>
            <p>{servicedetail.description}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleServiceDetail;
