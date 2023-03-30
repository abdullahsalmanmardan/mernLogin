const dotenv = require("dotenv");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());

require("./db/conn");
const user = require("./model/userSchema");
//* where our config file is present
dotenv.config({ path: "./config.env" });

//* ----------------- these all are middlewares
//*is se app json ko samjh jay ga
app.use(express.json());
//* to configure our routes
app.use(require("./routes/auth"));

//** middle ware code here */
//** next will be called when middleware will be succeeded */
const middleware = (req, res, next) => {
  console.log("hello from middleware");
  // * jab ye next call ho ga tab hi about ma hum agy jaa sakin gay
  next();
};
// ** path and the callBackFunction
// app.get("/", (req, res) => {
//   res.send("hello from the home page ");
// });

// //** middleware will only be called when in middleware next is called */
// app.get("/about", middleware, (req, res) => {
//   res.send("hello from the about page ");
// });

// app.get("/contact", (req, res) => {
//   res.send("hello from the contact page ");
// });

// app.get("/login", (req, res) => {
//   res.send("hello from the login page ");
// });

// app.get("/register", (req, res) => {
//   res.send("hello from the register page ");
// });

app.listen(8080, () => {
  console.log("server listing to port 8080");
});
