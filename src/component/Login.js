import { useState, useEffect } from "react";
import "./Login.css";
import { Form, InputGroup, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [loginState, setLoginState] = useState({
    username: "",
    password: "",
  });
  const [authorized, setAuthorized] = useState(false);
  const handleChange = (e) => {
    setLoginState({
      ...loginState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginState);
  };

  useEffect(() => {}, []);
  return (
    <div className="wrapper">
      <form className="row g-3" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <InputGroup className="inputgroup mb-3">
          <Form.Control
            name="username"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup className="inputgroup mb-3">
          <Form.Control
            name="password"
            placeholder="Password"
            aria-label="Password"
            aria-describedby="basic-addon2"
            onChange={handleChange}
          />
        </InputGroup>
        <Button className="button" type="submit" variant="primary">
          Submit
        </Button>{" "}
        <Link to="/register"> Don't have an account? Register now</Link>
      </form>
    </div>
  );
}
