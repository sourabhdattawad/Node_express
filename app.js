var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));

app.use(bodyParser());
app.get('/', function (req,res){

	res.render('index');
	
	});

app.post('/add', function (req,res){

	var newItem = req.body.newItem;
	res.redirect('/');
	console.log(newItem);
	
	});

app.listen(1337,function(){
	console.log("The port is 1337\n")
});


// var http = require('http');

// http.createServer(function (request, response) {
//   response.writeHead(200, {'Content-Type': 'text/plain'});
//   response.end('Hello World\n');
// }).listen(8888);

// console.log('Server running at http://127.0.0.1:8888/');