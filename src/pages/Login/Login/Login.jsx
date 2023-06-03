import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log("Login Page Location", location);
  const from = location.state?.from?.pathname || "/category/0";
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container className="w-50 mx-auto bg-[#fff] drop-shadow-[0_50px_150px_rgba(30,200,20,0.55)]">
      <h1 className="fs-1 m-5">Please Login</h1>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className=""
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button
          className="block mb-4 bg-[#c00093] border-none rounded-none"
          variant="primary"
          type="Login"
        >
          Login
        </Button>

        <Form.Text className="fs-5">
          Don't Have an Account?{" "}
          <Link className="underline text-success fs-4 p-2" to="/register">
            Register
          </Link>{" "}
        </Form.Text>
        <Form.Text className="text-muted ">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
