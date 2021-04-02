const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const fetch = require('node-fetch');
app.use(cors());

app.get('/companies', async (req, res) => {
	try {
		await fetch('https://accountable-backend.herokuapp.com/companies', {
			method: 'GET', // or 'PUT'
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data);
				res.json(data);
			});
	} catch (error) {
		console.log(error);
	}
});

if (process.env.NODE_ENV === 'production') {
	// Serve any static files
	app.use(express.static(path.join(__dirname, '/build')));
	// Handle React routing, return all requests to React app
	app.get('*', function (req, res) {
		res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
	});
}

app.listen(PORT);
