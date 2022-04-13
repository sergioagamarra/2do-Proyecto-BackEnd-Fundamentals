const Movie = require("../models/Movie")

class MovieController{

    async getMoviesView(req,res){
        const data = await Movie.readAll()
        return res.render("movie",{
            formCSS: "/css/loginCSS.css",
            movies: data,
            hasMovies: data.length > 0,
            typeUser: req.session.typeUser
        })
    }

    async getMoviewInOrderByName(req,res){
        const order = req.params.order
        const data = await Movie.readAllOrder(order)
        return res.render("movie",{
            formCSS: "/css/loginCSS.css",
            movies: data,
            hasMovies: data.length > 0,
            typeUser: req.session.typeUser
        })
    }

    async getMoviewInOrderByRating(req, res){
        
        const data = await Movie.readAllOrderRating()
        //console.log(data);
        return res.render("movie",{
            formCSS: "/css/loginCSS.css",
            movies: data,
            hasMovies: data.length > 0,
            typeUser: req.session.typeUser
        })
    }

    async getMoviewInOrderByMoreViews(req, res){
        const data = await Movie.readAllOrderMoreViews()
        return res.render("movie",{
            formCSS: "/css/loginCSS.css",
            movies: data,
            hasMovies: data.length > 0,
            typeUser: req.session.typeUser
        })

    }

    async getMovieSearchView(req, res){
        const movie = req.body
        const data = await Movie.searchMovie(movie.nameMovie)
        return res.render("movie",{
            formCSS: "/css/loginCSS.css",
            movies: data,
            hasMovies: data.length > 0,
            typeUser: req.session.typeUser
        })

    }

    getRegisterMovieView(req,res){
        return res.render("register-movie",{formCSS: "css/loginCSS.css"})
    }

    async getEditMovieView(req,res){
        const id = req.params.id
        const data = await Movie.readOne(id)

        return res.render("edit-movie",{
            formCSS: "/css/loginCSS.css",
            movie: data[0],
            // hasUsers:data.length > 0
        })
    }

    async addMovieView(req,res){

        const newMovie = new Movie(req.body)
        //console.log(newMovie)
        const validation = newMovie.validate()
        if(validation.sucess){
            await newMovie.save()
            return res.redirect("/movies")
        }
        
        return res.render("register-movie",{formCSS: "css/loginCSS.css", validation, movie:newMovie})
    }

    async deleteMovieView(req,res){
        const id = req.params.id
   
        const data = await Movie.delete(id)
        return res.render("movie",{
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

    async editMovieView(req,res){

        const newMovie = new Movie(req.body)
        newMovie.idMovie = req.body.idMovie
        //console.log(newMovie)
        const validation = newMovie.validate()
        if(validation.sucess){
            await Movie.update(newMovie)
            return res.redirect("/movies")
        }
        
        return res.render("edit-movie",{formCSS: "css/loginCSS.css",validation, movie:newMovie})
    }

}

module.exports = MovieController