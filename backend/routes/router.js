const Router = require("express").Router();

const { authorization } = require("../middlewares/middlewares");

const { httpGetUser, httpLogin, httpAddUser } = require("./controller/user");

Router.get("/", httpGetUser);
Router.post("/users/sign-in", httpLogin);
Router.post("/users/sign-up", httpAddUser);

module.exports = Router;
