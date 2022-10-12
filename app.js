//#############*******Dependencies********##############
const express = require('express');
const path = require('path');

//##########*******importing route files********############
const registerAORoutes = require('./routes/homeRoutes');

//##########*******Instantiations********############
const app = express();

//##########********Configurations********############
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
// app.set('views', (__dirname, './views'));

//###########*******Middleware******##############

app.use(express.urlencoded({ extended: false }));
//for static images
app.use(express.static(path.join(__dirname, 'public')));
//for dynamic images...those for uploads
app.use('/public/images', express.static(__dirname + '/public/uploads'));

//###############***********Routes**********#############
app.use('', registerAORoutes);

// For invalid routes
app.get('*', (req, res) => {
	res.send('404! This is an invalid URL...Page not found!!!!!');
});

//this hud always be tha lastest line in the index.js file
//our application is going to be running on the port number 3000
app.listen(3000, () => console.log('listening on port 3000'));
