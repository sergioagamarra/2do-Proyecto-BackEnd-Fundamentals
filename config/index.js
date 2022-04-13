const dotenv = require("dotenv")
dotenv.config()


const config = {
    secret:process.env.SECRET,
    port:process.env.PORT,
    dbHost:process.env.DB_HOST,
    dbPort:process.env.DB_PORT,
    dbUser:process.env.DB_USER,
    dbPassword:process.env.DB_PASSWORD,
    dbName:process.env.DB_NAME,
    secret:process.env.SECRET
}

module.exports = config