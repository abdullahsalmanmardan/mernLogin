import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { userContext } from "../App";
//* idher userContext ma (state,dispatch) aaa gaya ho ga

const Login = () => {
  const { state, dispatch } = useContext(userContext);
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleInputs = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    // todo is se hum us object ma us key ke against value store kar rhy ha
    setLoginUser({ ...loginUser, [name]: value });
  };
  const loginBtn = async (e) => {
    e.preventDefault();
    const { email, password } = loginUser;

    //todo yaha pe hum ne data send kiya ha
    const res = await fetch("/signin", {
      method: "POST",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      // todo if key value are same donot write then again
      // ? humin server ko sirf string ma data send karna ha
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await res.json();
    console.log("the data is", data[0].type);
    if (res.status === 422 || !data) {
      window.alert("Registration failed");
    } else {
      let user = data[0].type;
      //todo when user is found
      dispatch({ type: user, payload: "admin" });

      window.alert("Registration succesfull");
      navigate("/home");
    }
  };
  return (
    <>
      <center>
        <h1>Login Form</h1>
      </center>
      <form method="POST">
        <div class="form-outline mb-4">
          <input
            value={loginUser.email}
            onChange={handleInputs}
            name="email"
            type="email"
            id="form2Example1"
            class="form-control inputclass"
          />
          <label class="form-label inputclass" for="form2Example1">
            Email address
          </label>
        </div>

        <div class="form-outline mb-4">
          <input
            value={loginUser.password}
            onChange={handleInputs}
            name="password"
            type="password"
            id="form2Example2"
            class="form-control inputclass"
          />
          <label class="form-label inputclass" for="form2Example2">
            Password
          </label>
        </div>

        <div class="row mb-4">
          <div class="col">
            <a href="#!">Forgot password?</a>
          </div>
        </div>

        <button
          onClick={loginBtn}
          type="submit"
          class="btn btn-primary btn-block mb-4 inputclass"
        >
          Sign in
        </button>
      </form>
    </>
  );
};

export default Login;
