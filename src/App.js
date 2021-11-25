import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AddNewItem from "./components/Admin/AddNewItem/AddNewItem";
import ManageAllOrders from "./components/Admin/ManageAllOrders/ManageAllOrders";
import Footer from "./components/Common/Footer/Footer";
import Header from "./components/Common/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";
import MyOrders from "./components/MyOrders/MyOrders";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import SingleServiceDetail from "./components/Services/SingleServiceDetail/SingleServiceDetail";
import AuthProvider from "./context/AuthProvider";
import NotFound from "./Error/NotFound";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute exact path="/placeorder">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute  path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute exact path="/placeorder">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute exact path="/placeorder/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute exact path="/singleservicedetail/:id">
              <SingleServiceDetail></SingleServiceDetail>
            </PrivateRoute>
            <PrivateRoute exact path="/addnewitem">
              <AddNewItem></AddNewItem>
            </PrivateRoute>
            <PrivateRoute exact path="/manageallorders">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/myorders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
