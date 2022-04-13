const {query,insert} = require("../config/database")
const { DateTime } = require("luxon");

class Rental{
    idRental
    constructor(rental){
        this.idUser = rental.idUser
        this.idMovie= rental.idMovie
        this.fechaAlquiler = rental.fechaAlquiler
        this.fechaDev = rental.fechaDev
        this.fechaRealDev = rental.fechaRealDev
        this.estado = rental.estado
        this.comision = rental.comision
        this.calification = rental.calification
    }

 //El metodo puede ser utilizado sin crear una instancia
static async readAll(){
    return await query("SELECT * FROM rentals, users, movies WHERE rentals.idUser = users.idUser and rentals.idMovie = movies.idMovie")
}

static async readRentalUser(id){
    // return await query("SELECT * FROM rentals, users, movies WHERE rentals.idUser = users.idUser and rentals.idMovie = movies.idMovie and rentals.estado = 0 and rentals.idUser=" + id)
    return await query("SELECT * FROM rentals, users, movies WHERE rentals.idUser = users.idUser and rentals.idMovie = movies.idMovie and rentals.idUser=" + id + " ORDER BY rentals.estado ASC")
}


static async readOne(id){
    return await query("SELECT * FROM rentals WHERE idRental =" + id)
}

// static async readByEmail(email){
//     const user = await query("SELECT * FROM rentals WHERE email = ?", [email])
//     return user
// }

async save(){
    
    const newRental = await insert("rentals",{
        idUser: this.idUser,
        idMovie: this.idMovie,
        fechaAlquiler: this.fechaAlquiler,
        fechaDev: this.fechaDev,
        fechaRealDev: this.fechaRealDev,
        estado: this.estado,
        comision: this.comision,
        calification: this.calification
    })
    this.idRental = newRental
    // console.log("En User")
    // console.log(newUser)
    return this.idRental
}

async update(newRental){
    const id = await query("UPDATE rentals SET ? WHERE idRental = ?" ,[newRental,this.idRental])
}

static async delete(id){
    await query("DELETE FROM rentals WHERE idRental = " + id)
}

async updateStock(id, add){
    if (add){
        await query("UPDATE movies SET stock = stock + 1 WHERE idMovie = " + id)
    }
    else{
        await query("UPDATE movies SET stock = stock - 1 WHERE idMovie = " + id)
    }
    
}

async returnMovie(rental, movie, id){
    if (rental.fechaDev < rental.fechaRealDev){
        const comision = movie.precio*10/100
        await query("UPDATE rentals SET fechaRealDev = '" + rental.fechaRealDev + "', estado = 1, comision = " + comision + ", calification = " + rental.calification + " WHERE idRental = " + rental.idRental)
    }
    else{
        await query("UPDATE rentals SET fechaRealDev = '" + rental.fechaRealDev + "', estado = 1, calification = " + rental.calification + " WHERE idRental = " + rental.idRental)
    }

    await rental.updateStock(movie.idMovie, true)
    
}

validate(){
    let result = {success:true, errors:[]}
    if(!(this.idUser && this.idMovie && this.fechaAlquiler && this.fechaDev && this.estado)){
        result.success = false
        result.errors.push("Rellena todos los campos")
    }
    // if(this.password!==this.confirmPassword){
    //     result.success = false
    //     result.errors.push("Las contraseñas no coinciden")
    // }
    // if(this.profilePicture.length === 0){
    //     this.profilePicture='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpbPpWCdbVZP5eHwbuND4LmHOUqQBjKAiT9Q&usqp=CAU'
    // }
    return result
}


}

module.exports = Rental