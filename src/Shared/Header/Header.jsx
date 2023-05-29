import logo from "../../assets/logo.png";
import "./Header.css";
import moment from "moment";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
const Header = () => {
  return (
    <Container>
      <div className="text-center">
        <img className="header-logo" src={logo} alt="" />
        <p className="text-center text-[#7990be]">
          Journalism Without Favour or Fear
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex mt-4">
        <button className="btn btn-active btn-secondary rounded-none">
          Latest News
        </button>
        <Marquee
          className="bg-gradiand text-white fs-5"
          speed={60}
          pauseOnHover={true}
        >
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
      <div>
        <Navbar
          className="bg-gradiand my-5"
          collapseOnSelect
          expand="md"
          variant="light"
        >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link className="text-white" href="#features">
                Home
              </Nav.Link>
              <Nav.Link className="text-white" href="#pricing">
                About
              </Nav.Link>
              <Nav.Link className="text-white" href="#pricing">
                Career
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="text-white" href="#deets">
                Profile
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes"></Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <button className="text-white me-4">Login</button>
        </Navbar>
      </div>
    </Container>
  );
};

export default Header;
