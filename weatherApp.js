//require https
const https = require('https');

	//get information from server
	https.get('https://openweathermap.org/current', response =>{
			console.log();});

	//Read the data
	let body = '';
	response.on('data', data=>{
			body +=data.toString();
		
	response.on('end', ()=>{
							console.log(body);
	});