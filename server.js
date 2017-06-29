const express = require('express');
const database = require('./database');
var users = database.users;
var comments = database.comments;
const api =require('./api');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', api);

app.listen(9001);