import { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

    createUser(email, password)
      .then((result) => {
        const createdtUser = result.user;
        console.log(createdtUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };

  return (
    <Container className="w-50 mx-auto bg-[#fff] drop-shadow-[0_50px_150px_rgba(30,200,20,0.55)]">
      <h1 className="fs-1 m-5">Please Register</h1>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            className=""
            type="text"
            name="name"
            placeholder="Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control
            className=""
            type="text"
            name="photo"
            placeholder="Photo url"
            required
          />
        </Form.Group>

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
          <Form.Check
            onClick={handleAccepted}
            type="checkbox"
            name="accept"
            label={
              <>
                Accept{" "}
                <Link to="/terms" className="underline text-success fs-5 p-2">
                  Terms and Conditions
                </Link>{" "}
              </>
            }
          />
        </Form.Group>
        <Button
          className="block mb-4 bg-[#c00093] border-none rounded-none"
          variant="primary"
          type="submit"
          disabled={!accepted}
        >
          Register
        </Button>
        <Form.Text className="fs-5">
          Already Have an Account?{" "}
          <Link className="underline text-success fs-4 p-2" to="/login">
            Login
          </Link>{" "}
        </Form.Text>
        <Form.Text className="text-muted ">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Register;
