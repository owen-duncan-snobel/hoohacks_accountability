const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;

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
		await axios({
			method: 'GET',
			url:
				'https://strapi-accountability-308920.uc.r.appspot.com/companies',
		})
			.then((response) => {
				return response.data;
			})
			.then((data) => res.send(data));
	} catch (error) {
		console.log(error);
	}
});
app.listen(PORT);
