// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/fetcher');

// let repoSchema = mongoose.Schema({
//   // TODO: your schema here!
// });

// let Repo = mongoose.model('Repo', repoSchema);

// let save = (/* TODO */) => {
//   // TODO: Your code here
//   // This function should save a repo or repos to
//   // the MongoDB
// }

// module.exports.save = save;

const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "student",
  password: "student",
  database: "gitrepos"
});

connection.connect(function(err) {
  if(err){
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

connection.query("SELECT 1 + 1 AS solution", function(error, results, fields) {
  if (error) throw error;
  console.log("The solution is: ", results[0].solution);
});

module.exports = {
  connection
}