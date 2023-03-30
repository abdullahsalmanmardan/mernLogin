const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//* where our config file is present
dotenv.config({ path: "./config.env" });
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  work: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
  //todo this is the array of the token
  tokens: [
    {
      token: {
        type: String,
      },
    },
  ],
});

//todo database ma save karny se  pehly hum ye kam karin gay
userSchema.pre("save", async function (next) {
  //* only if the password is modified call this
  //? is se password hash ho jay ga agr avaliable ho ga
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    console.log(this.password);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  //todo beacuse of this next .save method willl be callled
  next();
});

//* here we will generate the authentitcation token
userSchema.methods.generateAuthToken = async function () {
  try {
    //todo id must be equal to the id of releative username/password
    let token = jwt.sign({ _id: this._id }, process.env.SECRECTKEY);
    // * how we save token to the database;

    this.tokens = this.tokens.concat({ token: this.token });
    await this.save();

    return token;
  } catch (err) {
    console.log(err);
  }
};

//* first one is the table name to be created
//* second one is the schema for the table
const USER = mongoose.model("USER", userSchema);

//* ab humin jaha jaha chahiyay we will use it for post to write data to database
module.exports = USER;
