import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logout } = useAuth();
  return (
    <Navbar bg="dark" expand="lg" sticky="top" variant="dark" className="">
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/">
          <span className="text-warning fw-bolder">K-food</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/home">
              Home
            </Nav.Link>

            {user.displayName ? (
              <>
                <Nav.Link as={NavLink} to="/myorders">
                  My Orders
                </Nav.Link>
                <Nav.Link as={NavLink} to="/manageallorders">
                  Manage All orders
                </Nav.Link>
                <Nav.Link as={NavLink} to="/addnewitem">
                  Add A New Item
                </Nav.Link>
                <button
                  type="button"
                  onClick={logout}
                  className="btn btn-outline-warning pt-0 pb-0"
                >
                  <Nav.Link as={NavLink} to="">
                    Logout
                  </Nav.Link>{" "}
                </button>
              </>
            ) : (
              <Nav.Link as={NavLink} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
