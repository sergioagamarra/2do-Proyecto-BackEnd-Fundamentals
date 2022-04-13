const express = require("express")
const RentalController = require("../controllers/rentalController")

const router = express.Router()

const rentalController = new RentalController()

router.get("/rentals", rentalController.getRentalsView)
router.get("/rentals/:id", rentalController.getRentalsUserView)
router.post("/register-rental", rentalController.addRentalView)
router.get("/register-rental/:id", rentalController.getAddRentalView)
router.post("/return-movie", rentalController.returnMovieView)
router.get("/return-movie/:id", rentalController.getReturnReviewView)
// router.get("/",userController.getHomeView)
// router.delete("/delete-user/:id", userController.deleteUserView)

// //router.get("/api/registrar-usuario", userController.addUserView)

// router.get("/profile", userController.getUserProfileView)
// router.get("/users", userController.getUsersView)


module.exports = router