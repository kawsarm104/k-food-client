import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Service from '../Service/Service';
import { useDispatch, useSelector } from 'react-redux';
import { fetchServices } from '../../../redux/slices/productSlices';

const Services = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchServices());
  }, []);

  const allServices = useSelector((state) => state.services.allServices);

  // const [allServices, setAllServices] = useState([]);
  // useEffect(() => {
  //   const url = 'https://still-peak-01540.herokuapp.com/services';
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setAllServices(data);
  //       // console.log(data);
  //     });
  // }, []);
  if (!allServices.length > 0) {
    return (
      <div className="text-center loading-spinner mt-5">
        <Spinner animation="border" variant="warning" />
      </div>
    );
  }
  return (
    <>
      <div className="text-center mt-4">
        {/* <h2>total {allServices.length} foods item got </h2> */}
        <p className="text-warning fw-bolder fs-6">Quick pick</p>
        <h1 className="fw-bolder ">Popular Goods</h1>
      </div>

      <div className="container-fluid row mx-auto">
        {allServices.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}{' '}
      </div>
    </>
  );
};

export default Services;
