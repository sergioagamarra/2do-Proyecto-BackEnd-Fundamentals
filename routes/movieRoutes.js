const express = require("express")
const MovieController = require("../controllers/movieController")

const router = express.Router()

const movieController = new MovieController()


router.get("/movies",movieController.getMoviesView)
router.post("/movies", movieController.getMovieSearchView)
router.get("/register-movie",movieController.getRegisterMovieView)
router.post("/register-movie",movieController.addMovieView)
router.delete("/delete-movie/:id",movieController.deleteMovieView)
// router.post("/read-movie/:id", movieController.readMovieView)
router.get("/edit-movie/:id", movieController.getEditMovieView)
router.post("/edit-movie", movieController.editMovieView)

router.get("/movie-order-name/:order", movieController.getMoviewInOrderByName)
router.get("/movie-order-rating", movieController.getMoviewInOrderByRating)
router.get("/movie-order-more-views", movieController.getMoviewInOrderByMoreViews)

module.exports = router