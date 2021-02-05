const mysql = require('mysql')
require('dotenv').config()
const util = require('util')

//database connection
const pool = mysql.createPool({
    host : process.env.HOST,
    user : process.env.USERNAME,
    password : process.env.PASSWORD,
    database : process.env.DATABASE
})

pool.getConnection((err,connection)=>{
    if(err)
    console.log(err)
    else
    console.log("database connected")
    if(connection)
    connection.release()
    return
})

pool.query = util.promisify(pool.query);
module.exports = pool