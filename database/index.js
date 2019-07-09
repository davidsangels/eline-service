// const mysql = require('mysql')

// const connection = mysql.createConnection({
//   user: 'root',
//   password: '',
//   host: 'localhost',
//   database: 'airbnb'
// })

// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   connection.query("DROP DATABASE IF EXISTS airbnb;");
//   connection.query("CREATE DATABASE airbnb", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   })
// })

// module.exports = connection