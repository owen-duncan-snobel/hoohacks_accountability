const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 5000;

// add middlewares
app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(express.static('public'));

app.use((req, res, next) => {
	res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

const path = require('path');
const express = require('express');
const app = express(); // create express app

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/companies', async (req, res) => {
	try {
		await axios({
			method: 'GET',
			url:
				'https://strapi-accountability-308920.uc.r.appspot.com/companies',
		})
			.then((response) => {
				console.log(response);
				return response.data;
			})
			.then((data) => res.send(data));
	} catch (error) {
		console.log(error);
	}
});
app.listen(PORT);
