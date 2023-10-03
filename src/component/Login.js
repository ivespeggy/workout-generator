import { useState, useEffect, useRef, useContext } from "react";
import "./Login.css";
import { Form, InputGroup, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";

const LOGIN_URL = "/users/login";

export default function Login() {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();
  const [loginState, setLoginState] = useState({
    username: "",
    password: "",
  });
  // const [authorized, setAuthorized] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const handleChange = (e) => {
    setLoginState({
      ...loginState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const basicAuthCredentials = btoa(
        loginState.username + ":" + loginState.password
      );
      const response = await axios.post(LOGIN_URL, JSON.stringify(loginState), {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic " + basicAuthCredentials,
        },
        // 这样就带着cookie了 如果后端CORS设置时.allowedOrigin("*")就会报错
        // withCredentials: true,
      });

      const accessToken = response?.data?.data.token;
      const roles = response?.data?.data.userInfo.roles;
      setAuth({ roles, accessToken });
      // console.log(JSON.stringify(roles));
      setLoginState({
        username: "",
        password: "",
      });
      navigate("/");
    } catch (error) {
      if (!error?.response) {
        setErrorMsg("No Server Response");
      } else {
        const responseData = error.response.data;
        setErrorMsg(responseData.code + " " + responseData.message);
      }
    }
  };

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrorMsg("");
  }, [loginState]);

  return (
    <div className="wrapper">
      <form className="row g-3" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <p
          ref={errRef}
          className={errorMsg ? "errorMsg" : "hide"}
          aria-live="assertive"
        >
          {errorMsg}
        </p>
        <InputGroup className="inputgroup mb-3">
          <Form.Control
            type="text"
            name="username"
            placeholder="Username"
            aria-label="Username"
            onChange={handleChange}
            ref={userRef}
            value={loginState.username}
            autoComplete="off"
            required
          />
        </InputGroup>
        <InputGroup className="inputgroup mb-3">
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            aria-label="Password"
            onChange={handleChange}
            value={loginState.password}
            required
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
