import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

const Service = (props) => {
  
  AOS.init({ duration: 2000 });
  // console.log(props.service);
  const {_id, name, price, details, photoUrl } = props.service;
  return (
    <div  data-aos="zoom-in-down" className=" col-sm-12 col-md-6 col-lg-3 g-1 my-2 ">
      <Card className="h-100 m-auto border-0">
        <Card.Img variant="top" className="img-fluid" src={photoUrl} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text className="fw-bold">Price: ${price}</Card.Text>
          <Card.Text>{details}</Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-center border-0 shadow-none bg-white">
          <Link to={`/placeorder/${_id}`}>
            <Button variant="success " className="ps-3 pe-3 rounded-pill">Order Now</Button>{" "}
          </Link>
          {/* <Link to={`/singleservicedetail/${_id}`}>
            <Button variant="outline-warning">View Details</Button>{" "}
          </Link> */}
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Service;
