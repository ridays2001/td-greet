require('dotenv').config();

const http = require('http');
const logger = require('morgan');
const fetch = require('node-fetch');

const express = require('express');
const app = express();

app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');

app.set('port', process.env.PORT || 80);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger('dev'));
app.use(express.static(`${__dirname}/public`));

app.get('/', (_, res) => res.render('home'));
app.get('/greet', (_, res) => res.render('preGreet'));
app.post('/greet', async (req, res) => {
	const { role, prof } = req.body;
	if (!role || !role.length) return res.redirect('/greet');
	if (!prof || !prof.length) return res.redirect('/greet');
	const inputName = `${role.replace(/[.]+$/g, '.')} ${prof}`.toLowerCase().split(' ');
	const name = [];
	for (const part of inputName) {
		name.push(`${part[0].toUpperCase()}${part.substr(1)}`);
	}

	// Log all teacher names to Discord.
	try {
		await fetch(`${process.env.WB}`, {
			method: 'POST',
			body: JSON.stringify({
				tts: false,
				embeds: [
					{
						title: 'Teachers\' Day Greeting!',
						description: `Teacher - ${name.join(' ')}`,
						color: 16738740,
						timestamp: new Date()
					}
				]
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		});
	} catch (e) {
		console.log(e);
	}

	return res.redirect(`/greetings?name=${encodeURIComponent(name.join(' '))}`);
});
app.get('/greetings', (req, res) => {
	console.log(req.query);
	return res.render('greetings', { name: req.query.name });
});

app.use((_, res) => res.redirect('/'));

const wakeUp = () => {
	// If date <= 7th Sept.
	if (Date.now() <= 1599436800) return undefined;
	console.log('Pinging...');
	setTimeout(async () => {
		try {
			await fetch('https://riday.herokuapp.com').then(_ => console.log('App stayed up for another 25 mins.'));
		} catch (e) {
			console.log('Error keeping the page up.');
		} finally {
			wakeUp();
		}
	}, 1.5e6);
	return true;
};

const server = http.createServer(app);
server.listen(process.env.PORT || 80);
server.on('listening', () => {
	wakeUp();
	console.log('Listening on http://localhost/');
});
server.on('error', err => console.log(err));
