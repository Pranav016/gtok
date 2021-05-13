const firebase = require('../db/firebaseDB');
const firestore = firebase.firestore();

module.exports.getHome = (req, res) => {
	try {
		return res.render('home.html');
	} catch (err) {
		res.status(400).send(err.message);
	}
};

module.exports.postHome = async (req, res) => {
	try {
		const { name, email, message } = req.body;
		console.log({ name, email, message });
		// await firestore
		// 	.collection('users')
		// 	.doc()
		// 	.set({ name: name, email: email, message: message });
		return res.redirect('back');
	} catch (err) {
		res.status(400).send(err.message);
	}
};
