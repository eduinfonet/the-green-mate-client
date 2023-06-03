import logo from "../../assets/logo.png";
import "./Header.css";
import moment from "moment";
import { Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <Container>
      <div className="text-center">
        <img className="header-logo " src={logo} alt="" />
        <p className="text-center text-[#c00093]">
          Journalism Without Favour or Fear
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex mt-4">
        <button className="btn btn-active bg-[#5f8d4e] rounded-none border-none">
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
        {/* <Navbar
          className="bg-light my-5"
          collapseOnSelect
          expand="md"
          variant="light"
        >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link className="text-[#c00093]" href="#features">
                <Link to="/"> Home</Link>
              </Nav.Link>
              <Nav.Link className="text-[#c00093]" href="#pricing">
                About
              </Nav.Link>
              <Nav.Link className="text-[#c00093]" href="#pricing">
                Career
              </Nav.Link>
            </Nav>
            <Nav>
              {user && (
                <Nav.Link className="" href="#deets">
                  <FaUserCircle className="fs-3 text-[#c00093]"></FaUserCircle>
                </Nav.Link>
              )}
              <Nav.Link eventKey={2} href="#memes"></Nav.Link>
              {user ? (
                <Button className="button-login rounded-none">Logout</Button>
              ) : (
                <Link to="/login">
                  <Button className="button-login rounded-none">Login</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar> */}
      </div>
    </Container>
  );
};

export default Header;
