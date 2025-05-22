const fs = require('nod:fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const rows = data.trim().split('\n').slice(1);
    const fields = {};

    rows.forEach((row) => {
      const columns = row.split(',');
      const [firstname, , , field] = columns;
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });
    console.log(`Number of students: ${total}`);

    for (const [field, list] of Object.entries(studentsByField)) {
      console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
