import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../../hooks/useAuth";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const [serviceDetail, setServiceDetail] = useState({});

  // toastify message for success
  const notify = () => toast.success("Order placed successfully");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const { id } = useParams();
  useEffect(() => {
    const url = `https://still-peak-01540.herokuapp.com/services/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(serviceDetail);
        setServiceDetail(data);
      });
  }, []);
  const onSubmit = (data) => {
    axios
      .post("https://still-peak-01540.herokuapp.com/orders", data)
      .then((res) => {
        // console.log(res);
        if (res.data.insertedId) {
          notify();
          reset();
        }
      });
  };
  return (
    <div>
      {/* {servicedetail.name} */}
      {/* {successMessage? <div className="alert alert-success w-75 justify-content-center align-items-center" role="alert">  A simple success alert—check it out! </div>:<></> } */}
      <Container fluid className="mt-5">
        <Row>
          <Col sm={12} md={4} className="">
            <img src={serviceDetail.photoUrl} className="img-fluid" alt="" />
          </Col>
          <Col
            sm={12}
            md={4}
            className=" d-flex align-items-center ps-5 pb-5 pe-5"
          >
            <div>
              <h1> {serviceDetail.name}</h1>
              <p className="text-warning fw-bolder fs-4">
                ${serviceDetail.price}
              </p>
              <p>{serviceDetail.details}</p>
              <p>{serviceDetail.description}</p>
            </div>
          </Col>
          <Col sm={12} md={4} className="d-flex justify-content-center h-100">
            <form
              className="shipping-form border p-4 h-100 shadow rounded"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input defaultValue={user.displayName} {...register("name")} />

              <input
                defaultValue={user.email}
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="error">This field is required</span>
              )}
              <input
                {...register("ordereditemname", { required: true })}
                defaultValue={serviceDetail.name}
              />
              {errors.ordereditemname && (
                <span className="error">Ordered Item Name is required</span>
              )}
              <input
                placeholder="House no, Ward no, Post Office"
                defaultValue=""
                {...register("address", { required: true })}
              />
              {errors.address && (
                <span className="error">Address is required</span>
              )}
              <input
                placeholder="City"
                defaultValue=""
                {...register("city", { required: true })}
              />
              {errors.city && <span className="error">City is required</span>}
              <input
                placeholder="Phone number"
                defaultValue=""
                {...register("phone", { required: true })}
              />
              {errors.phone && (
                <span className="error">Phone number is required</span>
              )}
              <input
                type="submit"
                // onClick={notify}
                className="btn btn-warning"
                value="Place Order"
              />
            </form>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default PlaceOrder;
