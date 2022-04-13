const express = require("express")
const AuthController = require("../controllers/authController")


const router = express.Router()
const authController = new AuthController()
/*---------Home View---------*/
router.get("/", authController.getHomeView)
  
/*---------Login View---------*/
router.get("/login",authController.getLoginView)
router.post("/login",authController.login)

/*---------Logut---------*/
router.get("/logout",authController.logOut)

/*---------Registration View---------*/
router.get("/registration",authController.getRegistrationView)
router.post("/registration",authController.signUp)


module.exports = router