const Router = require("express").Router();

const  authorization  = require("../middlewares/middlewares");

const { httpGetUser, httpLogin, httpAddUser } = require("./controller/user");
const { httpGetLocation, httpGetRoomlist, httpGetRoomDetail } = require("./controller/rooms");

Router.get("/users/me", authorization, httpGetUser);
Router.post("/users/sign-in", httpLogin);
Router.post("/users/sign-up", httpAddUser);
// Router.get("/place/:locationId", httpGetLocation);
Router.get("/place/:locationId/list", httpGetRoomlist);
Router.get("/place/:locationId/list/:accomoId", httpGetRoomDetail);

module.exports = Router;
