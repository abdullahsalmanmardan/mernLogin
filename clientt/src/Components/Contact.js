import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <>
      <br></br>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-3 bkcolor">
            <div className="row">
              <div className="col-md-3">
                {
                  /* here will the icon */
                  <i className="fa fa-phone logo" aria-hidden="true"></i>
                }
              </div>
              <div className="col-md-9">
                <h2>Phone</h2>
                <p>324423423423</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 bkcolor">
            <div className="row">
              <div className="col-md-3">
                {<i className="fa fa-envelope logo" aria-hidden="true"></i>}
              </div>
              <div className="col-md-9">
                <h2>Email</h2>
                <p>abc@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 bkcolor">
            <div className="row">
              <div className="col-md-3">
                {<i className="fa fa-address-card logo" aria-hidden="true"></i>}
              </div>
              <div className="col-md-9">
                <h2>Address</h2>
                <p>some address</p>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
        <br></br>
        <br></br>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 backgroundcolordiv">
            <div className="row">
              <div className="col-md-12">
                <h5>Get In Touch</h5>
              </div>
            </div>
            {/* second row starts form here */}
            <div className="row">
              <div className="col-md-4">
                <input className="form-control" placeholder="name"></input>
              </div>
              <div className="col-md-4">
                <input className="form-control" placeholder="email"></input>
              </div>
              <div className="col-md-4">
                <input className="form-control" placeholder="address"></input>
              </div>
            </div>
            <br></br>
            <div className="row">
              <div className="col-md-12">
                <textarea
                  className="txtarea"
                  name="w3review"
                  rows="4"
                  cols="8"
                ></textarea>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <button className="btn btn-primary">Send Message</button>
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </>
  );
};

export default Contact;
