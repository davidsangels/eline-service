const mysql = require('mysql');
const { mysqlData } = require('../config.js');

const connection = mysql.createConnection({
  user: mysqlData.user,
  password: mysqlData.password,
  host: 'localhost'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  connection.query("DROP DATABASE IF EXISTS infoPlace;");
  connection.query("CREATE DATABASE infoPlace", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});

module.exports = connection;