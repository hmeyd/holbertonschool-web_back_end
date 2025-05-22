const express = require('express');
const fs = require('fs');

const app = express();

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data
        .split('\n')
        .filter(line => line.trim() !== '');

      if (lines.length <= 1) {
        resolve('Number of students: 0');
        return;
      }

      const headers = lines[0].split(',');
      const fieldIndex = headers.length - 1;
      const studentsByField = {};

      for (let i = 1; i < lines.length; i++) {
        const parts = lines[i].split(',');
        const field = parts[fieldIndex];
        const firstname = parts[0];

        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(firstname);
      }

      const total = Object.values(studentsByField)
        .reduce((sum, arr) => sum + arr.length, 0);

      let output = `Number of students: ${total}`;
      for (const [field, list] of Object.entries(studentsByField)) {
        output += `\nNumber of students in ${field}: ${list.length}. List: ${list.join(', ')}`;
      }

      resolve(output);
    });
  });
}

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const filePath = process.argv[2];

  countStudents(filePath)
    .then((output) => {
      res.set('Content-Type', 'text/plain');
      res.send(`This is the list of our students\n${output}`);
    })
    .catch((err) => {
      res.set('Content-Type', 'text/plain');
      res.send(`This is the list of our students\n${err.message}`);
    });
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
