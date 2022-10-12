const express = require('express');
//instatiate a file that points to the express to access different methods
const router = express.Router();

//creating/writing a route
router.get('/home', (req, res) => {
	res.render('home');
});

//post route
router.post('/home', (req, res) => {
	console.log(req.body);
	// res.send('Registration Successfull!!!!!');
	// res.redirect('/register');
});

//always the last line in the route files
//exposes the router file to be used in another file
module.exports = router;
