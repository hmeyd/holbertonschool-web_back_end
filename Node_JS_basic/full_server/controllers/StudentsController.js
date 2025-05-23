import readDatabase from '../utils/readDatabase.js';

class StudentsController {
  static getAllStudents(req, res) {
    const filePath = process.argv[2];
    readDatabase(filePath)
      .then((students) => {
        let response = 'This is the list of our students\n';
        const fields = Object.keys(students).sort();
        fields.forEach((field) => {
          const list = students[field].join(', ');
          response += `Number of students in ${field}: ${students[field].length}. List: ${list}\n`;
        });
        res.status(200).send(response.trim());
      })
      .catch((err) => {
        res.status(500).send(err.message);
      });
  }

  static getAllStudentsByMajor(req, res) {
    const filePath = process.argv[2];
    const major = req.params.major;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(filePath)
      .then((students) => {
        const list = students[major];
        if (list) {
          res.status(200).send(`List: ${list.join(', ')}`);
        } else {
          res.status(200).send('List:');
        }
      })
      .catch((err) => {
        res.status(500).send(err.message);
      });
  }
}

export default StudentsController;
