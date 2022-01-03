import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Service from "../Service/Service";


const Services = () => {
  const [allServices, setAllServices] = useState([]);
  useEffect(() => {
    const url = "https://still-peak-01540.herokuapp.com/services";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAllServices(data);
        // console.log(data);
      });
  }, []);
  if (!allServices.length > 0) {
    return (
      <div className="text-center loading-spinner mt-5">
        <Spinner animation="border" variant="warning" />
      </div>
    );
  }
  return (
    <>
      <div className="text-center mt-4 container">
        {/* <h2>total {allServices.length} foods item got </h2> */}
        <p className="text-warning fw-bolder fs-6">Quick pick</p>
        <h1 className="fw-bolder ">Popular Goods</h1>
      </div>
      <div className="row mx-auto container">
        {allServices.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}{" "}
      </div>
    </>
  );
};

export default Services;
