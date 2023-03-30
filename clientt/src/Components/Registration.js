import React, { useState } from "react";
import "./Registration.css";
import { useNavigate } from "react-router-dom";
const Registration = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  const navigate = useNavigate();

  const handleInputs = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    // todo is se hum us object ma us key ke against value store kar rhy ha
    setUser({ ...user, [name]: value });
    //console.log(user.name);
  };

  const sendDataToBackend = async (e) => {
    //todo is se form reload ni hoga
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;
    try {
      //todo yaha pe hum ne data send kiya ha
      const res = await fetch("/register", {
        method: "POST",
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        // todo if key value are same donot write then again
        // ? humin server ko sirf string ma data send karna ha
        body: JSON.stringify({
          name,
          email,
          phone,
          work,
          password,
          cpassword,
        }),
      });
      //todo yaha pe humin server se response aaa gaya ha
      const data = await res.json();
      console.log("the data is" + res);
      if (res.status === 422 || !data) {
        window.alert("Registration failed");
      } else {
        window.alert("Registration succesfull");
        navigate("/Login");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="card bg-light">
        <article className="card-body mx-auto topcard">
          <h4 className="card-title mt-3 text-center">Create Account</h4>

          <p className="divider-text">
            <span className="bg-light">OR</span>
          </p>
          <form method="POST">
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span htmlFor="name" className="input-group-text">
                  <i className="fa fa-user"></i>
                </span>
              </div>
              <input
                name="name"
                value={user.name}
                onChange={handleInputs}
                className="form-control"
                placeholder="Full name"
                type="text"
              />
            </div>
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-envelope"></i>
                </span>
              </div>
              <input
                name="email"
                value={user.email}
                onChange={handleInputs}
                className="form-control"
                placeholder="Email address"
                type="email"
              />
            </div>
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-phone"></i>
                </span>
              </div>

              <input
                name="phone"
                value={user.phone}
                onChange={handleInputs}
                className="form-control"
                placeholder="Phone number"
                type="text"
              />
            </div>
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-building"></i>
                </span>
              </div>
              <input
                name="work"
                value={user.work}
                onChange={handleInputs}
                className="form-control"
                placeholder="Job type"
                type="text"
              />
            </div>
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-lock"></i>
                </span>
              </div>
              <input
                name="password"
                value={user.password}
                onChange={handleInputs}
                className="form-control"
                placeholder="Create password"
                type="password"
              />
            </div>
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-lock"></i>
                </span>
              </div>
              <input
                name="cpassword"
                value={user.cpassword}
                onChange={handleInputs}
                className="form-control"
                placeholder="Repeat password"
                type="password"
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                className="btn btn-primary btn-block"
                onClick={sendDataToBackend}
              />
            </div>
            <p className="text-center">
              Have an account? <a href="">Log In</a>
            </p>
          </form>
        </article>
      </div>
    </>
  );
};

export default Registration;
