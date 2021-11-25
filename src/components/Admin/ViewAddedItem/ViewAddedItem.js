import React from "react";

const ViewAddedItem = (props) => {
  const {_id, name, price, details, photoUrl } = props.service;
  return (
    <tr>
      <th scope="row">{props.index + 1}</th>

      <td>
        <img
          src={photoUrl}
          style={{ height: "90px", width: "100px" }}
          className="img-fluid"
          alt=""
        />
      </td>

      <td>{name}</td>
      <td>{details}</td>
      <td>{price}</td>
      <td className="">
        <div className="d-inline-flex">
          <button
            title="want to edite the item ?"
            // onClick={() => props.handleDeleteButton(_id)}
            //   onClick={handleShow}
            className="delete-btn btn btn-outline-primary border-0 "
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <i className="far fa-edit "></i>
          </button>
          <button
            // onClick={() => props.handleDeleteButton(_id)}
            //   onClick={handleShow}
            onClick={() => props.handleDeleteButton(_id)}
            title="want to delete the item ?"
            className="delete-btn btn btn-outline-danger border-0 "
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <i className="far fa-trash-alt "></i>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ViewAddedItem;
