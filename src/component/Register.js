import { useState, useEffect } from "react";
import "./Register.css";
import { Form, InputGroup, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [registerState, setRegisterState] = useState({
    username: "",
    gender: "",
    weight: "",
    height: "",
    age: "",
    roles: "user",
    password: "",
  });
  const handleChange = (e) => {
    setRegisterState({
      ...registerState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(registerState);
  };
  useEffect(() => {}, []);
  return (
    <div className="wrapper">
      <form className="row g-3" onSubmit={handleSubmit}>
        <h1>Register</h1>
        <InputGroup className="inputgroup mb-3">
          <Form.Control
            name="username"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={handleChange}
            required
          />
        </InputGroup>
        <InputGroup className="inputgroup mb-3">
          <Form.Select
            name="gender"
            placeholder="Gender"
            aria-label="Gender"
            aria-describedby="basic-addon2"
            onChange={handleChange}
            required
          >
            <option selected disabled>
              Select your Identity
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="Other">other</option>
          </Form.Select>
        </InputGroup>
        <InputGroup className="inputgroup mb-3">
          <Form.Control
            type="number"
            name="age"
            placeholder="Age(Optional)"
            aria-label="Age"
            aria-describedby="basic-addon3"
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup className="inputgroup mb-3">
          <Form.Control
            type="number"
            name="weight"
            placeholder="Weight(Optional)"
            aria-label="Weight"
            aria-describedby="basic-addon4"
            onChange={handleChange}
          />
        </InputGroup>{" "}
        <InputGroup className="inputgroup mb-3">
          <Form.Control
            type="number"
            name="height"
            placeholder="Height(Optional)"
            aria-label="Height"
            aria-describedby="basic-addon5"
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup className="inputgroup mb-3">
          <Form.Control
            name="password"
            placeholder="Password"
            aria-label="Password"
            aria-describedby="basic-addon6"
            onChange={handleChange}
            required
          />
        </InputGroup>
        <InputGroup className="inputgroup mb-3">
          <Form.Control
            name="confirmPassword"
            placeholder="Confirm Password"
            aria-label="Password"
            aria-describedby="basic-addon7"
            onChange={handleChange}
            required
          />
        </InputGroup>
        <Button className="button" type="submit" variant="primary">
          Register
        </Button>
        <Link to="/login">Already have an account? Log In here</Link>
      </form>
    </div>
  );
}