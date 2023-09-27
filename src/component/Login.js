import { useState, useEffect } from "react";
import "./Login.css";
import { Form, InputGroup, Button } from "react-bootstrap";

export default function Login() {
  const [loginState, setLoginState] = useState({
    username: "",
    password: "",
  });
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
        <InputGroup className="mb-3">
          {/* <InputGroup.Text id="basic-addon1">@</InputGroup.Text> */}
          <Form.Control
            name="username"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Control
            name="password"
            placeholder="Password"
            aria-label="Password"
            aria-describedby="basic-addon2"
            onChange={handleChange}
          />
        </InputGroup>
        <Button type="submit" variant="primary">
          Submit
        </Button>{" "}
      </form>
    </div>
  );
}
