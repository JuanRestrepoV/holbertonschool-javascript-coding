#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];

const apiUrl = `https://swapi-api.hbtn.io/api/films/${movieId}`;

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }


  const movie = JSON.parse(body);

  console.log(movie.title);
});
