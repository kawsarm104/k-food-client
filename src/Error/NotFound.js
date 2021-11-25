import React from "react";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="error-class">
      <div>
        {" "}
        <h1 className="text-danger text-center fw-bold fs-1">404</h1>
        <h1> Page Not Found</h1>
      </div>
    </div>
  );
};

export default NotFound;
