"use strict";

let express = require('express');
let bodyParser = require('body-parser');


let app = express();
let list = [];
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/create', function(req, res){

	let newPost = {
	  'title': req.body.title,
	  'content': req.body.content
  	};

	list.push(newPost);
	res.json(list);
});
app.listen(3000);
