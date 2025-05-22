const http = require('http');
const fs = require('fs');

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

const app = http.createServer((req, res) => {
  const { url } = req;

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (url === '/') {
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    const filePath = process.argv[2];

    countStudents(filePath)
      .then((output) => {
        res.end(`This is the list of our students\n${output}`);
      })
      .catch((err) => {
        res.end('This is the list of our students\n' + err.message);
      });
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

app.listen(1245);

module.exports = app;
