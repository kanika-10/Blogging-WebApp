require("dotenv").config();

const path = require("path");
const express = require("express");
const cors = require('cors');

const { connectToMongoDB } = require("./connect");
const cookieParser = require("cookie-parser");
const {
  checkForAuthenticationCookie,
} = require("./middlewares/authentication");

const homeRoute = require("./routes/home");
const userRoute = require("./routes/user");
const blogRoute = require("./routes/blog");

const app = express();


const PORT = process.env.PORT || 8000;
app.use(cors());

connectToMongoDB(process.env.MONGO_URL).then(() => {
  console.log("Connedted to mongoDB");
});

// app.set("view engine", "ejs");
// app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(checkForAuthenticationCookie());

app.use(express.static(path.resolve("./public")));

app.use("", homeRoute);
app.use("/user", userRoute);
app.use("/blog", blogRoute);

app.listen(PORT, (req, res) => {
  console.log("Server started");
});
