const mysql = require("mysql2");
const ENV_VARS = require(".");

const connection = mysql.createConnection({
  host: ENV_VARS.dbHost,
  port: ENV_VARS.dbPort,
  user: ENV_VARS.dbUser,
  password: ENV_VARS.dbPassword,
  database: ENV_VARS.dbName,
});

// const pool = mysql.createPool({
//   host: ENV_VARS.dbHost,
//   port: ENV_VARS.dbPort,
//   user: ENV_VARS.dbUser,
//   password: ENV_VARS.dbPassword,
//   database: ENV_VARS.dbName,
// })

// const promisedPool = pool.promise()

// async function query(sql){
//     try {
//         const results = await promisedPool.query(sql)
//         return results[0]
//     } catch (error) {
//         console.log(error)
//     }

//     return  null
// }

function query(sql,data){
    return new Promise((resolve,reject)=>{
        connection.query(sql,data,function(error,result){
            //Error first callback
            if(error){
                if(error.errno===1062){
                    const errorData = error.sqlMessage.split("'")
                    const value = errorData[1]
                    //TODO:Regular expressions
                    const field = errorData[3].split(".")[1].split("_")[0]

                    const message = `El ${field} '${value}' ya esta en uso`
                    reject(message)
                }
                reject(error.sqlMessage)
            }else{
                resolve(result)
            }
        })
    })
}

async function insert(tableName,data){
    
    try{
        const result = await query(`INSERT INTO ${tableName}(??) VALUES(?)`,[Object.keys(data),Object.values(data)])
        
        return {success:true,id:result.insertId}
    }catch(error){
        return {error,success:false}
    }
}


async function del(tableName,data){
    try{
       const result = await query(`DELETE FROM ${tableName} WHERE id=?`,[data])
       
        return {result: result, success: true}
    }catch(error){
        return {error,success:false}
    }
}


module.exports = {query,insert,del}
