import {} from "bootstrap";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGithub,
  FaGoogle,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import "./RightNav.css";
import QZone from "../QZone/QZone";
const RightNav = () => {
  return (
    <div>
      <div className="login-option">
        <h1 className=" text-center mb-3 fs-4">Login With</h1>
        <button className="btn btn-outline rounded-none mb-3 login-option">
          <FaGoogle className="me-2"></FaGoogle>
          Google
        </button>
        <button className="btn btn-outline rounded-none pe-3  login-option ">
          <FaGithub className="me-2"></FaGithub>
          Github
        </button>
      </div>

      <div className="login-option">
        <h1 className="my-4 text-center fs-3">Find on Us</h1>
        <ListGroup>
          <p className="d-flex">
            <ListGroup.Item className="find-us-on">
              <FaFacebook> </FaFacebook> Facebook
            </ListGroup.Item>
          </p>
          <ListGroup.Item className="find-us-on">
            <FaTwitter></FaTwitter> Twiter
          </ListGroup.Item>
          <ListGroup.Item className="find-us-on">
            <FaInstagram></FaInstagram>Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div className="amazing">
        <h1 className="fs-2 pt-5">Create an Amazing Newspaper</h1>
        <p className="my-4 fs-7">
          Discover thousand of options, east to customize layout, one-click to
          import demo and much more.
        </p>
        <Button className="rounded-none bg-red-600 mb-5" variant="danger">
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default RightNav;
