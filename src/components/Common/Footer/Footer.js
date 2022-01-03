import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-class pb-3">
      <div className="d-flex justify-content-center">
        <div className="m-5 p-5 d-flex align-items-center justify-content-center bg-warning rounded-3 w-50 text-center">
          <div className="text-center">
            <h5>Call us for make order now</h5>
            <h5>+8801515247103</h5>
          </div>
        </div>
      </div>
      <div className="text-center text-white">
        <div className="mb-3">
          <i className="fab fa-facebook-f facebook-icon ms-2 me-2"></i>
          <i className="fab fa-instagram instagram-icon ms-2 me-2"></i>
        </div>
        <h5 className="text-warning fw-bolder">k-food</h5>
        <p>
          Etiam consequat sem ullamcorper, euismod metus sit amet, tristique
          justo. Vestibulum mattis, nisi ut faucibus commodo, risus ex commodo.
        </p>
       <div className="new3">
       <p>© All Rights Reserved - 2020 </p>
       </div>
      </div>
    </div>
  );
};

export default Footer;
