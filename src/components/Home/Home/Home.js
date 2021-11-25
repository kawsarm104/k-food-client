import React from "react";
// import useAuth from "../../../hooks/useAuth";
import Services from "../../Services/Services/Services";
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
    </div>
  );
};

export default Home;
