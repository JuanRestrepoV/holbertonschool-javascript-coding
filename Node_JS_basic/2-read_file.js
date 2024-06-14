const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.split('\n').filter(line => line.trim() !== '');

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    const students = {};
    let totalStudents = 0;

    for (let i = 1; i < lines.length; i++) {
      const studentData = lines[i].split(',');
      if (studentData.length > 1) {
        const firstName = studentData[0];
        const field = studentData[3];

        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstName);
        totalStudents++;
      }
    }

    console.log(`Number of students: ${totalStudents}`);
    for (const [field, names] of Object.entries(students)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
