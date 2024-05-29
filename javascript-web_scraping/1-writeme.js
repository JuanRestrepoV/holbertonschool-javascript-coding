#!/usr/bin/node
const fs = require('fs');

const string = process.argv[3];
const filePath = process.argv[2];

fs.writeFile(filePath, string, 'utf8', (err, data) => {
  if (err) console.error(err);
  else return(string);
});
