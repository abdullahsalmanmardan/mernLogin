const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const router = express.Router();
var cookieParser = require("cookie-parser");
router.use(cookieParser());
require("../db/conn");
const user = require("../model/userSchema");
const authenticate = require("../middleware/authenticate");
router.get("/", (req, res) => {
  res.send("welcome to home page router");
});

router.get("/register", (req, res) => {
  res.send("welcome to register page router");
});

router.post("/register", async (req, res) => {
  try {
    const { name, email, phone, work, password, cpassword } = req.body;
    if (!name || !email || !phone || !work || !password || !cpassword) {
      return res.status(422).json({ error: "fill all the feilds of the form" });
    }
    //* to match the currect email with the mail in the database table
    const userExist = await user.findOne({ email: email });
    if (userExist) {
      return res.status(200).json({ error: "Email already exists" });
    }
    const user1 = new user({ name, email, phone, work, password, cpassword });
    //todo is jaga pe hum data to hash karin gay

    const data = await user1.save();
    if (data) {
      return res.status(200).json({ message: "Data saved succesfuuly" });
    }
  } catch (err) {
    console.log(err);
  }
  //   console.log(req.body);
  //   res.json({ message: req.body });
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ error: "fill all the feilds of the form" });
  }
  //* if it finds Data will be returned else null will be returned
  const userExist = await user.findOne({ email: email });
  if (userExist) {
    //* check if both the passwords are same or not
    const isMatched = await bcrypt.compare(password, userExist.password);
    //todo token using auth===== now go to usershema
    const token = await userExist.generateAuthToken();
    if (isMatched) {
      res.cookie("jwttoken", token, {
        expires: new Date(Date.now() + 30000000),
        httpOnly: true,
      });
      return res.status(200).json({ message: "Successfully login " });
    } else {
      return res.status(422).json({ error: "invalid credentials" });
    }
  } else {
    return res.status(422).json({ error: "invalid credentials" });
  }
});
//* is ma middleware jo ha wo autheticate ha
router.get("/aboutus", authenticate, async (req, res) => {
  console.log("this is about us page");
  res.status(200).send(req.rootuser);
});

router.get("/logout", async (req, res) => {
  console.log("this is logout page");
  res.clearCookie("jwttoken", { path: "/" });
  res.status(200).send("user logout");
});

module.exports = router;
