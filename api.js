const database = require('./database');
const users = database.users;
const comments =database.comments;

const express = require('express');
const router = express.Router();

router.get('/users', function(req, res) {
	// body...
	res.json(users);
});

router.get('/comments', function(req,res) {
	res.json(comments);
});

module.exports = router;