const express = require("express")
const userSignUpController = require("../controllers/signUp/users.controller")
const userLoginController = require("../controllers/logIn/users.controllers")
const userLoggedOut = require("../controllers/logout/logout.controllers")
const fetchImportFile = require("../controllers/import/import.pokemon")
const routerAPI = express.Router()
routerAPI.post("/user/sign-up", userSignUpController.signUp)
routerAPI.post("/user/login", userLoginController.Login)
routerAPI.post("/user/logout", userLoggedOut.Logout)
routerAPI.get("/user/import", fetchImportFile)
module.exports = routerAPI