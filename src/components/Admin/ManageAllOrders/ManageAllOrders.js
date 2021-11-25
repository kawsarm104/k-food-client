import React, { useEffect, useState } from "react";
import ManageAllOrderTable from "./ManageAllOrderTable/ManageAllOrderTable";

const ManageAllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    const url = "https://still-peak-01540.herokuapp.com/orders";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAllOrders(data);
      });
  }, []);
  return (
    <div className="container ">
      <div className="row mt-5">
        <div className="table-responsive">
          <table className="shadow table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Item Name</th>
                <th scope="col">Address</th>
                <th scope="col">Phone</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {allOrders.map((order, index) => (
                <ManageAllOrderTable
                  key={order._id}
                  order={order}
                  index={index}
                ></ManageAllOrderTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageAllOrders;
