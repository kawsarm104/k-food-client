import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import AddItem from '../AddItem/AddItem';
import DeleteItem from '../DeleteItem/DeleteItem';
import DHome from '../DHome/DHome';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    return (
      <Row>
        <Col sm={12} md={4}>
          <Link to="/home">
            <button color="inherit">Home</button>
          </Link>
          <Link to={`${url}`}>
            <button color="inherit">Dashboard</button>
          </Link>

          <>
            <Link to={`${url}/additem`}>
              <button color="inherit">add item</button>
            </Link>
            <Link to={`${url}/deleteitem`}>
              <button color="inherit">deleteitem</button>
            </Link>
          </>
        </Col>
        <Col sm={12} md={8}>
          <Switch>
            <Route exact path={path}>
              <DHome></DHome>
            </Route>
            <Route path={`${path}/additem`}>
              <AddItem></AddItem>
            </Route>
            <Route path={`${path}/deleteitem`}>
              <DeleteItem></DeleteItem>
            </Route>
          </Switch>
        </Col>
      </Row>
    );
};

export default Dashboard;