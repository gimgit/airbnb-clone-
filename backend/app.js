require("dotenv").config();
const express = require("express");
// const passport = require("passport");
// const passportConfig = require("./passport");

const path = require("path");
const app = express();

const Router = require("./routes/router");

app.use(express.json());
// app.use(express.static(path.join(__dirname, "..", "public")));
// app.use(express.urlencoded()); 일단 주석처리
// app.use(passport.initialize());
// passportConfig();

// app.use("/api/auth", authRouter);
app.use("/api", Router); 

module.exports = app;