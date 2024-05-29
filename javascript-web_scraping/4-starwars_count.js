#!/usr/bin/node

const request = require('request');
const { Z_ASCII } = require('zlib');

const apiUrl = "https://swapi-api.hbtn.io/api/films/";

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }

  const movie = JSON.parse(body).results;
	
	let count = 0;
  movie.filter((results) => {

		for (const i of results.characters) if (i.includes('/18/')) count++;
	})
	console.log(count)
});
