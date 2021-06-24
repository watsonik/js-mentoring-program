/**
 * 1. You need to make a GET request (via async/await) to the resource: https://jsonplaceholder.typicode.com/posts 
 * using fetch method inside the sendRequest function
 * 2. Save the response to response.json file
 * 3. Save only those items, where id < 20
 * 4. Check yourself by running npm run test:nodejs
 * DOCS: https://www.npmjs.com/package/node-fetch
 */
const fetch = require('node-fetch');
const fs = require('fs');

/**
 * Run fetch method inside the function
 * Use the fs.writeFile method inside the function
 */
const sendRequest = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
		method: "GET",
		headers: {}
	});
	const json = await res.json();
	const top = json.filter(item => item.id < 20);
	fs.writeFile(`${__dirname}/response.json`, JSON.stringify(top, null, '\t'), err => {
		if (err) console.log(err);
		console.log("FETCH - SUCCESS");
	});
};

module.exports = {
	sendRequest
};
