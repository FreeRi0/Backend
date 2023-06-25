const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'homework'
})

connection.query('SELECT * FROM authors;', (err, result) => {
  if(err) {
    throw err;
  }

  console.log(result);
})