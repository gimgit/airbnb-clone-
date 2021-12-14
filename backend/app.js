require("dotenv").config();
const express = require("express");
// const passport = require("passport");
// const passportConfig = require("./passport");

const path = require("path");
const app = express();

// const authRouter = require("./routes/auth/auth.route");
// const Router = require("./routes/posts/router");


app.use(express.static(path.join(__dirname, "..", "public")));
//app.use(express.urlencoded()); 일단 주석처리
app.use(express.json());
// app.use(passport.initialize());
// passportConfig();

// app.use("/api/auth", authRouter);
// app.use("/api/posts", Router); 일단 주석처리

module.exports = app;