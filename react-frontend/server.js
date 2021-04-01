const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const fetch = require('node-fetch');
app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', (req, res) => {
	return res.send('pong');
});

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

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
				res.send(data);
			});
	} catch (error) {
		console.log(error);
	}
});
app.listen(PORT);
