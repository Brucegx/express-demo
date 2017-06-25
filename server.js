const express = require('express');
const database = require('./database');
var users = database.users;
var comments = database.comments;
const api =require('./api');

const app = express();

app.get('/users', function(req, res) {
    console.log("logging successfully");
    res.send("can you see me?");
    res.json(users);
});

app.get('/users/:id', function(req, res) {
	console.log("successfully");
	const user = users[req.params.id];
	if(!user){
		res.status(404);
		return res.send('not found ' + req.params.id);
	}

	var contents = '<ul>';
	contents += '<li>name: ' + user.name + '</li>';
	contents += '<>following: ' + user.following + '<li>';
	contents += '<ul>';
	res.send(contents); 
});

app.use('/api', api);

app.listen(9001);