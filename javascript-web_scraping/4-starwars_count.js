#!/usr/bin/node

const request = require('request');

const apiUrl = "https://swapi-api.hbtn.io/api/films/";

if (!apiUrl) {
  console.error('Usage: ./4-starwars_count.js <api_url>');
  process.exit(1);
}

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }

  const movie = JSON.parse(body).results;
	
	let count = 0;
  movie.filter((results) => {

		for (const i of results.characters) if (i.includes('/18/')) count++;
		return count;
	})
	console.log(count)
});
