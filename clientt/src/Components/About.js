import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";
const About = () => {
  const [userData, setUserData] = useState();

  const navigate = useNavigate();
  const callAboutUrlFromBackend = async () => {
    let res;
    try {
      res = await fetch("/aboutus", {
        method: "GET",

        headers: {
          //todo this is for the cookies

          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
    } catch (e) {
      console.log("rror");
    }

    if (res.status === 400) {
      console.log("no credential found");
      navigate("/Login");
      return;
    }
    //* if data is not found
    if (res.status === 200);
    {
      const data = await res.json();
      //* is data ma sarraa user ka data aa jay ga
      setUserData(data);
    }
  };

  useEffect(() => {
    callAboutUrlFromBackend();
  });

  return (
    <>
      <br></br>
      <div className="container maincontainer">
        <div className="row">
          <div className="col-md-2"></div>

          <div className="col-md-8">
            <br></br>
            <div className="row">
              <div className="col-md-4">
                <img className="img-fluid" src=""></img>
                <h4>Skills</h4>
              </div>
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-6">
                    <h5>{userData.name}</h5>
                  </div>
                  <div className="col-md-6">
                    <button className="btn btn-primary">Edit Profile</button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <h5></h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <h5>Ranking: 1/10</h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-2">
                    <a href="">About</a>
                  </div>
                  <div className="col-md-2">
                    <a href="">TimeLine</a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <h6>UserId</h6>
                    <h6>UserId</h6>
                    <h6>UserId</h6>
                  </div>
                  <div className="col-md-6">
                    <h6>UserId</h6>
                    <h6>UserId</h6>
                    <h6>UserId</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </>
  );
};

export default About;
