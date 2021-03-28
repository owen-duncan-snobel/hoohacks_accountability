const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', (req, res) => {
	return res.send('pong');
});

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/companies', async (req, res) => {
	try {
		await axios({
			method: 'GET',
			url:
				'https://strapi-accountability-308920.uc.r.appspot.com/companies',
		})
			.then((response) => response.data)
			.then((data) => res.send(data));
	} catch (error) {
		console.log(error);
		res.send('error');
	}
});
app.listen(8080);
