const Rental = require("../models/Rental")
const Movie = require("../models/Movie")

class RentalController{

    async getRentalsView(req, res){
        const data = await Rental.readAll()
        const date = Date.now();
        const today = new Date(date);
        //console.log(data);
        return res.render("rentals",{
            formCSS: "/css/loginCSS.css",
            rentals:data,
            hasRentals:data.length > 0,
            typeUser: req.session.typeUser,
            today: today
        })
    }

    async getRentalsUserView(req, res){
        const id = req.params.id
        const data = await Rental.readRentalUser(id)
        const date = Date.now();
        const today = new Date(date);
        //console.log(data);
        return res.render("rentals",{
            formCSS: "/css/loginCSS.css",
            rentals:data,
            hasRentals:data.length > 0,
            typeUser: req.session.typeUser,
            today: today
        })
    }

    async getReturnReviewView(req, res){
        const id = req.params.id
        const data = await Rental.readOne(id)
        const rental = new Rental(data[0])
        rental.idRental = id
        const data2 = await Movie.readOne(rental.idMovie)
        const movie = new Movie(data2[0])
        movie.idMovie = rental.idMovie
        const date = Date.now();
        const today = new Date(date);
        rental.fechaRealDev = today
        return res.render("reviews",{
            formCSS: "/css/loginCSS.css",
            rental: rental,
            movie: movie,
            typeUser: req.session.typeUser
        })
    }

    async addRentalView(req, res){
        const data = req.body
        const newRental = new Rental(data)
        newRental.estado = 0
        const add = false
        await newRental.updateStock(newRental.idMovie, add)
        await newRental.save()
        //console.log(data)
        return res.redirect("/rentals/"+req.session.idUser)
    }

    async getAddRentalView(req, res){
        if (req.session.loggedIn){
            const id = req.params.id
            const data = await Movie.readOne(id)
            const movie = new Movie(data[0])
            movie.idMovie = data[0].idMovie
            // const movie = Movie.readOne(id)
            // console.log(movie);
            const date = Date.now();
            const today = new Date(date);
            const auxDate = Date.now()
            const aux = new Date(auxDate)
            const dev = new Date(aux.setDate(aux.getDate() + 7))
            return res.render("register-rental", {
                formCSS: "/css/loginCSS.css",
                movie: movie,
                today: today,
                dateDev: dev
            })
        }
        else{
            return res.redirect("/login")
        }
        
    }

    async returnMovieView(req, res){
        console.log(req.body);
        const rental = new Rental(req.body)
        rental.idRental = req.body.idRental

        if (req.body.hasOwnProperty("rate-5")){
            rental.calification = 5
        } 
        else if (req.body.hasOwnProperty("rate-4")) {
            rental.calification = 4
        }
        else if (req.body.hasOwnProperty("rate-3")) {
            rental.calification = 3
        }
        else if (req.body.hasOwnProperty("rate-2")) {
            rental.calification = 2
        }
        else if (req.body.hasOwnProperty("rate-1")) {
            rental.calification = 1
        }
        else{
            rental.calification = null
        }
        console.log(rental);
        const data = await Movie.readOne(rental.idMovie)
        const movie = new Movie(data[0])
        movie.idMovie = rental.idMovie
        await rental.returnMovie(rental, movie)
        // const stock = await rental.updateStock(movie[0].idMovie, true)
        return res.redirect("/rentals/" + req.session.idUser)
    }
    // getUserProfileView(req,res){
    //     return res.render("profile",{formCSS: "css/loginCSS.css"})
    // }

    // getHomeView(req,res){
    //     return res.render("home",{formCSS: "css/loginCSS.css"})
    // }

    async deleteRentalView(req, res){
        const id = req.params.id
        const data = await Rental.delete(id)
        return res.render("home",{
            formCSS: "/css/loginCSS.css"
            // users:data,
            // hasUsers:data.length > 0
        })
        // const data = req.body
        // const newUser = new User(data)
        // const register = await newUser.save()
        // console.log(data)
        // return res.render("home",{
        //     users:data,
        //     hasUsers:data.length > 0
        // })
    }
}

module.exports = RentalController