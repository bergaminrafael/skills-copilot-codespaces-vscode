// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var commentsPath = path.join(__dirname, 'comments.json');
var comments = [];

// Read comments.json file
fs.readFile(commentsPath, 'utf8', function(err, data) {
  if (err) {
    console.error(err);
  } else {
    comments = JSON.parse(data);
  }
});

// Parse request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up static files
app.use(express.static(path.join(__dirname, 'public'));

// Get all comments
app.get('/comments', function(req, res) {
  res.json(comments);
});

// Add a comment
app.post('/comments', function(req, res) {
  var comment = {
    id: Date.now(),