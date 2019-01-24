//require https module
const https = require ('https');
//require http module for status codes
const http = require('http');
//function to print message

//print error messages
function printError(error) {
	console.error(error.message);
}

//function to print message to the console
function printMessage (username, badgecount, points) {
		const message = `${username} has ${badgecount} total badges and ${points} points`;
		console.log(message);
	}

//connect to the API
function getProfile (username) {
	try {	
	const request = https.get(`https://teamtreehouse.com/${username}.json`, 		response => {
		if (response.statusCode === 200) {
			let body ="";
			//read the data
			
			response.on ('data', data => {
					body += data.toString();
			});
			//when finished log out
			response.on ('end', () => {
				try {
					//parse the data
					
					const profile = JSON.parse(body);
					
					//print the data
					printMessage (username, profile.badges.length, profile.points.JavaScript);
					}catch (error) {
						printError(error);
					}
					});
			}else {
				const message = `There was an error getting the profile for ${username} ${http.STATUS_CODES[response.statusCode]})`;
				const statusCodeError = new Error(message);
				printError(statusCodeError);
			}
		});
request.on('error', printError);
} catch (error) {
	printError(error);
}
}
//call the function

const users = process.argv.slice(2);
users.forEach (getProfile);
			
			