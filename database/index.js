const mysql = require('mysql2');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getAllParks = (callback) => {
  connection.query('SELECT * FROM parks;', (err, response) => {
    callback(err, response);
  });
};

module.exports = {
  getAllParks: getAllParks
}