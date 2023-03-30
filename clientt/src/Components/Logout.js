import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../App";

const Logout = () => {
  const { state, dispatch } = useContext(userContext);
  const navigate = useNavigate();
  const goToLoginPage = async () => {
    //* idher hum bus backend se logout api ko call kar rahy ha
    const res = await fetch("/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    dispatch({ type: "user", payload: false });
    //todo api called and we called the login page to frontend
    console.log("logout button pressed");
    navigate("/Login");
    return;
  };

  useEffect(() => {
    goToLoginPage();
  });

  return <div>Logout</div>;
};

export default Logout;
