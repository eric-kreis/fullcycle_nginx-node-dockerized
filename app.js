const { faker } = require('@faker-js/faker');
const express = require('express');
const mysql = require('mysql');

const app = express();

const {
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DB,
  PORT = 3000,
} = process.env;

const connection = mysql.createConnection({
  host: MYSQL_HOST,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DB,
});

connection.connect();

app.get('/', async (req, res) => {
  const newName = faker.person.fullName();

  connection.query(`INSERT INTO people(name) values(?)`, newName, (err) => {
    if (err) throw err;
    connection.query('SELECT name FROM people', (err, results) => {
      if (err) throw err;

      let html = '<h1>Full Cycle Rocks!</h1>';

      html += '<ul>';
      results.forEach((row) => {
        html += `<li>${row.name}</li>`;
      });
      html += '</ul>';

      res.send(html);
    });
  });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
