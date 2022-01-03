import React from "react";
import Call from "../../Call/Call";
import HottestPizza from "../../HottestPizza/HottestPizza";
// import useAuth from "../../../hooks/useAuth";
import Services from "../../Services/Services/Services";
import Subscribe from "../../Subscribe/Subscribe";
import Banner from "../Banner/Banner";
import GetMoreWithApp from "../GetMoreWithApp/GetMoreWithApp";
import SitAtHome from "../SitAtHome/SitAtHome";

const Home = () => {
  // const { user } = useAuth();
  return (
    <div>
      {/* <h5>User: {user.displayName}</h5> */}
      <Banner></Banner>
      <Services></Services>
      <SitAtHome></SitAtHome>
      <GetMoreWithApp></GetMoreWithApp>
      <HottestPizza></HottestPizza>
      <Call></Call>
      <Subscribe></Subscribe>

    </div>
  );
};

export default Home;
