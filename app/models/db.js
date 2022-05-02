const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");
/*
var connection = mysql.createPool({
  host: dbConfig.Uri,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});
*/
var connection = mysql.createPool(dbConfig.DbUri)

module.exports = connection;
