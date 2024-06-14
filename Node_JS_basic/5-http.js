const { createServer } = require('http');
const fs = require('fs');

const port = 1245;

const app = createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    fs.readFile(process.argv[2], 'utf-8', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('This is the list of our students\nCannot load the database');
        return;
      }

      const lines = data.trim().split('\n').filter((line) => line);
      const students = {};
      let totalStudents = 0;

      for (let i = 1; i < lines.length; i += 1) {
        const [name, , , field] = lines[i].split(',');
        if (!students[field]) students[field] = [];
        students[field].push(name);
        totalStudents += 1;
      }

      const response = [
        'This is the list of our students',
        `Number of students: ${totalStudents}`,
      ];

      for (const [field, names] of Object.entries(students)) {
        response.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }

      res.statusCode = 200;
      res.end(response.join('\n'));
    });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
