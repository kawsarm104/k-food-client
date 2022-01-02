import React, { useEffect, useState } from 'react';
import ManageAllOrderTable from './ManageAllOrderTable/ManageAllOrderTable';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../../../redux/slices/cartSlice';

const ManageAllOrders = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOrders());
  }, []);

  const allOrders = useSelector((state) => state.cart.allOrders);
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
