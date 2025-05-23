import fs from 'fs';

const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.trim().split('\n');
      const headers = lines[0].split(',');
      const fieldIndex = headers.indexOf('field');
      const firstNameIndex = headers.indexOf('firstname');
      const students = {};

      for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line === '') continue;
        const values = line.split(',');
        const field = values[fieldIndex];
        const firstName = values[firstNameIndex];
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstName);
      }
      resolve(students);
    });
  });
};

export default readDatabase;
