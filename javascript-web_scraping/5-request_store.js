#!/usr/bin/node
const fs = require('fs');

const request = require('request');

const apiUrl = process.argv[2];

const filePath = process.argv[3];

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }
	fs.writeFile(filePath, body, 'utf8', (err) => {
		if (err) {
			console.error('Error writing to file:', err);
		}
  });
});
