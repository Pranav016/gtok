const express = require('express');
const config = require('./config/config');
const indexRoute = require('./routes/index');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/views');

app.use('/', indexRoute);

app.listen(config.port, (err) => {
	if (err) {
		console.log(err);
	}
	console.log(`Server started on port: ${config.port}`);
});
