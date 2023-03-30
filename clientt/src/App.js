import React, { createContext, useContext, useReducer } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Login from "./Components/Login";
import Error from "./Components/Error";
import Registration from "./Components/Registration";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Logout from "./Components/Logout";
//* to import the reducer function
import { initialState, reducer } from "./reducer/userReducer";
export const userContext = createContext();
const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/signup" element={<Registration />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Logout" element={<Logout />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Outlet />
    </>
  );
};

function App() {
  //* initail state is the value we will pass
  //* reducer is the function that we will define
  //* dispatch ma hum type bataa de gay jaha se reducer function ma if else lagaaa sakin gay
  const [state, dispatch] = useReducer(reducer, initialState);
  //todo agr hum ne koi value sab routes pe send karni ha //* here we have
  //todo sent state and dispatch to the every route
  //* first line ke liyay comment
  return (
    <>
      <userContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <Routing></Routing>
      </userContext.Provider>
    </>
  );
}

export default App;
