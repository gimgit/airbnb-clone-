require("dotenv").config();
const express = require("express");
const cors = require("cors");

const path = require("path");
const app = express();

const Router = require("./routes/router");

app.use("*", cors());
app.use(express.json());
// app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/api", Router); 

module.exports = app;