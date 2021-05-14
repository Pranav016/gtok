const express = require('express');
const config = require('./config/config');
const indexRoute = require('./routes/index');
/* const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
require('dotenv').config();

admin.initializeApp();
const { SENDER_EMAIL, SENDER_PASSWORD } = process.env; */

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

/* exports.sendEmailNotification = functions.firestore
	.document('submission/{docId}')
	.onCreate((snap, ctx) => {
		const data = snap.data();

		let authData = nodemailer.createTransport({
			host: 'smtp.gmail.com',
			port: 465,
			secure: true,
			auth: {
				user: SENDER_EMAIL,
				pass: SENDER_PASSWORD,
			},
		});
		authData
			.sendMail({
				from: 'alphavio15@gmail.com',
				to: `${data.email}`,
				subject: 'Thank you contacting us!',
				html: `<div>
		Hello User! <br/>
		Thank you for contacting Lets Gtok. Our team will shortly respond to your request.
		</div>
		`,
			})
			.then((res) => console.log('email sent successfully'))
			.catch((err) => console.log(err));
	});
*/
