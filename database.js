const mysql = require("mysql2");

const config = require("./config/db.config");
//const mysql = require("mysql2");
//const config = require("./db.config");
var pool = mysql.createPool(config.mysql.prod);

function executeQuery(sql, data, callback) {
  pool.getConnection(function (err, connection) {
    if (err) {
      // IF i got error  
      callback(err,undefined);
    } else {
      console.log("Connection Established Successfully \n");
      connection.query(sql, data, function (err1, result) {
        if (err1) {
          callback(err1);
        } else {
          console.log("Query Executed Succeessfully  \n", result);
          connection.release();
          console.log('Connection is released \n');
          callback(err1, result);
        }
      });
    }
  });
}

module.exports = { executeQuery };