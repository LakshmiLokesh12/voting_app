const express = require("express");
const userController = require("../controllers/user.controller");
//const vaccineController = require("../controllers/vaccine.controller");

const Router = express.Router();

Router.post("/createregister", userController.CreateRegister);
//Router.post("/login",)
Router.post("/createcandidate", userController.AddCandidate);
Router.post("/CreateElection", userController.CreateElection);


module.exports = Router;