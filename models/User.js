const {query,insert} = require("../config/database")

class User{
    idUser
    constructor(user){
        this.name = user.name
        this.email = user.email
        this.birthday = user.birthday
        this.profilePicture = user.profilePicture
        this.typeUser = user.typeUser
        this.password = user.password
        this.confirmPassword = user.confirmPassword
    }

 //El metodo puede ser utilizado sin crear una instancia
static async readAll(){
    return await query("SELECT * FROM users")
}
static async readOne(id){
    return await query("SELECT * FROM users WHERE idUser= ?", [id])
}

static async readByEmail(email){
    const user = await query("SELECT * FROM users WHERE email = ?", [email])
    return user
}

async save(){
    
    const newUser = await insert("users",{
        name:this.name,
        email:this.email,
        birthday:this.birthday,
        typeUser:this.typeUser,
        profilePicture:this.profilePicture,
        password:this.password
    })
    this.idUser = newUser
    // console.log("En User")
    // console.log(newUser)
    return this.idUser
}

async update(newUser){
    
    try {
        const id = await query("UPDATE users SET ? WHERE idUser = ?" ,[newUser,this.idUser])
        
    return id;
    } catch (error) {
        console.log(error)
    }
    
    
}

static async delete(id){
    await query("DELETE FROM users WHERE idUser = " + id)
}


validate(){
    let result = {success:true, errors:[]}
    if(!(this.name && this.email && this.birthday && this.password && this.confirmPassword && this.typeUser)){
        result.success = false
        result.errors.push("Rellena todos los campos")
    }
    if(this.password!==this.confirmPassword){
        result.success = false
        result.errors.push("Las contraseñas no coinciden")
    }
    if(this.profilePicture.length === 0){
        this.profilePicture='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpbPpWCdbVZP5eHwbuND4LmHOUqQBjKAiT9Q&usqp=CAU'
    }
    return result
}


}

module.exports = User