import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <Container>
      <Navbar
        className="bg-light my-5"
        collapseOnSelect
        expand="md"
        variant="light"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Link to="/category/0" className="text-[#c00093]" href="#features">
              Home
            </Link>

            <Nav.Link className="text-[#c00093]" href="#pricing">
              About
            </Nav.Link>
            <Nav.Link className="text-[#c00093]" href="#pricing">
              Career
            </Nav.Link>
          </Nav>
          <Nav>
            {user && (
              <FaUserCircle className="fs-3 text-[#c00093]"></FaUserCircle>
            )}

            {user ? (
              <Button
                onClick={handleLogOut}
                className="button-login rounded-none"
              >
                Logout
              </Button>
            ) : (
              <Link to="/login">
                <Button className="button-login rounded-none">Login</Button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
