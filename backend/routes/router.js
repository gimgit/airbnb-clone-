const Router = require("express").Router();

const  authorization  = require("../middlewares/middlewares");

const { httpGetUser, httpLogin, httpAddUser } = require("./controller/user");
const { httpGetLocation, httpGetRoomlist, httpGetRoomDetail } = require("./controller/rooms");
const { httpGetComments, httpAddComment, httpEditComment, httpDeleteComment } = require("./controller/comment")

/* USER */
Router.get("/users/me", authorization, httpGetUser);
Router.post("/users/sign-in", httpLogin);
Router.post("/users/sign-up", httpAddUser);

/* ROOM */
// Router.get("/place/:locationId", httpGetLocation);
Router.get("/place/:locationId/list", httpGetRoomlist);
Router.get("/place/:locationId/list/:accomoId", httpGetRoomDetail);

/* COMMENT */
Router.get("/:accomoId/comments", httpGetComments);
Router.post("/:accomoId/comments", authorization, httpAddComment);
Router.put("/:accomoId/comments/:commentId", authorization, httpEditComment);
Router.delete("/:accomoId/comments/:commentId", authorization, httpDeleteComment);

module.exports = Router;
