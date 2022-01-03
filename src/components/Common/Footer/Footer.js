import React from "react";
import "./Footer.css";
import logo from '../../../images/logo_1x.png';
const Footer = () => {
  return (
    <div className="row custom-c overflow-hidden">
      <div className="col-md-4 text-center overflow-hidden">
<img src={logo} className="img-fluid m-5 overflow-hidden" alt="" />
      </div>
      <div className="col-md-4 overflow-hidden">
        <h3 className="text-center text-white m-3 overflow-hidden">Motto</h3>
<p className="m-3 text-white overflow-hidden">Etiam consequat sem ullamcorper, euismod metus sit amet, tristique justo. Vestibulum mattis, nisi ut faucibus commodo, risus ex commodo.</p>
      </div>
      <div className="col-md-4 overflow-hidden">
        <h3 className="m-3 text-white text-center overflow-hidden">Follow Us</h3>
        <div className="text-center overflow-hidden">
        <i className="fab fa-facebook-f facebook-icon ms-3 me-2  "></i>
        <i className="fab fa-instagram instagram-icon ms-2 me-2"></i>
          <i className="fab fa-youtube icon ms-2 me-2"></i>
          <i class="fab fa-twitter icon-twitter ms-2 me-2"></i>
        </div>
      </div>
      
      <div className="new3 overflow-hidden container">
<p className="text-center text-white mb-3 overflow-hidden"> © All Rights Reserved - 2022 </p>
</div>

    </div>
  );
};

export default Footer;
