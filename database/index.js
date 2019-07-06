var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'infoPlace'
});

connection.connect();

module.exports = connection;