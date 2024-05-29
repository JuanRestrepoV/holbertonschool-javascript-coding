#!/usr/bin/node
const request = require('request');

const api = process.argv[2];

request(api, (error, response) => {
  if (error) {
    console.error('Error:', error);
    return;
  }

  console.log('code:', response.statusCode);
});
