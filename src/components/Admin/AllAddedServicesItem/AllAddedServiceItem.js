import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import ViewAddedItem from "../../Admin/ViewAddedItem/ViewAddedItem";

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
  }, [allServices]);
  if (!allServices.length > 0) {
    return (
      <div className="text-center loading-spinner mt-5">
        <Spinner animation="border" variant="warning" />
      </div>
    );
  }
  const handleDeleteButton = (id) => {
    const proceed = window.confirm("Are you sure you want to delete ?");
    // const proceed = true;
    // http://localhost:5000/services/
    if (proceed) {
      fetch(`https://still-peak-01540.herokuapp.com/services/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            // notify(); // import <ToastContainer /> at bottom of div
            const remainingUsers = allServices.filter(
              (order) => order._id !== id
            );
            setAllServices(remainingUsers);
          }
        });
    }
  };
  return (
    <>
      <div className="container fluid">
        <div className="row ">
          <div className="table-responsive">
            <table className="shadow table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Image</th>
                  <th scope="col">Item Name</th>
                  <th scope="col">Item Details</th>
                  <th scope="col">Price</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {allServices.slice(8, 15).map((service, index) => (
                  <ViewAddedItem
                    key={service._id}
                    service={service}
                    index={index}
                    handleDeleteButton={handleDeleteButton}
                  ></ViewAddedItem>
                ))}{" "}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
