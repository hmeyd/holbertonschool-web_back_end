const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    const lines = data
      .split('\n')
      .filter(line => line.trim() !== '');

    if (lines.length <= 1) {
      console.log('Number of students: 0');
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

    console.log(`Number of students: ${total}`);

    for (const [field, list] of Object.entries(studentsByField)) {
      console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
